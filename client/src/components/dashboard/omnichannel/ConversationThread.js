import React, { Component } from 'react';

// component
import ConversationMessages from "./ConversationMessages";

// styles
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
    root: {
        width: '100%',
        height: 475,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto'
    },
    inputField: {
        width: '100%'
    },
    textfield: {
        position: 'absolute',
        bottom: '-165px'
    },
    margin: {
        marginLeft: theme.spacing(1)
    }
});


class ConversationThread extends Component {
    state = {
        newMessage: '',
        conversationProxy: this.props.conversationProxy,
        messages: [],
        loadingState: 'initializing',
        boundConversations: new Set()
    }

    loadMessagesFor = (thisConversation) => {
        if (this.state.conversationProxy === thisConversation) {
            thisConversation.getMessages()
                .then(messagePaginator => {
                    if (this.state.conversationProxy === thisConversation) {
                        this.setState({ messages: messagePaginator.items, loadingState: 'ready' });
                    }
                })
                .catch(err => {
                    console.error("Couldn't fetch messages IMPLEMENT RETRY", err);
                    this.setState({ loadingState: "failed" });
                });
        }
    };

    componentDidMount = () => {
        if (this.state.conversationProxy) {
            this.loadMessagesFor(this.state.conversationProxy);

            if (!this.state.boundConversations.has(this.state.conversationProxy)) {
                let newConversation = this.state.conversationProxy;
                newConversation.on('messageAdded', m => this.messageAdded(m, newConversation));
                this.setState({ boundConversations: new Set([...this.state.boundConversations, newConversation]) });
            }
        }
    }

    componentDidUpdate = (oldProps, oldState) => {
        if (this.state.conversationProxy !== oldState.conversationProxy) {
            this.loadMessagesFor(this.state.conversationProxy);

            if (!this.state.boundConversations.has(this.state.conversationProxy)) {
                console.log('hello from component did update')
                console.log(!this.state.boundConversations.has(this.state.conversationProxy))
                let newConversation = this.state.conversationProxy;
                newConversation.on('messageAdded', m => this.messageAdded(m, newConversation));
                this.setState({ boundConversations: new Set([...this.state.boundConversations, newConversation]) });
            }
        }
    };

    static getDerivedStateFromProps(newProps, oldState) {
        let logic = (oldState.loadingState === 'initializing') || oldState.conversationProxy !== newProps.conversationProxy;
        if (logic) {
            return { loadingState: 'loading messages', conversationProxy: newProps.conversationProxy };
        } else {
            return null;
        }
    }

    messageAdded = (message, targetConversation) => {
        if (targetConversation === this.state.conversationProxy)
            this.setState((prevState, props) => ({
                messages: [...prevState.messages, message]
            }));
    };

    onMessageChanged = event => {
        this.setState({ newMessage: event.target.value });
    };

    sendMessage = event => {
        event.preventDefault();
        const message = this.state.newMessage;
        this.setState({ newMessage: '' });
        this.state.conversationProxy.sendMessage(message);
    };

    render() {
        const { classes, myIdentity } = this.props;
        const { messages } = this.state;

        return (
            <Grid item xs={9}>
                <div className={classes.root}>
                    <ConversationMessages
                        identity={myIdentity}
                        messages={messages} />

                    <form onSubmit={this.sendMessage} >
                        <FormControl fullWidth>
                            <InputLabel htmlFor="send-message" className={classes.margin}>Enter Message</InputLabel>
                            <FilledInput
                                id="send-message"
                                onChange={this.onMessageChanged}
                                value={this.state.newMessage}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            startIcon={<SendIcon />}
                                            htmlType="submit"
                                            type={"submit"}
                                        >
                                            Send
                                        </Button>
                                    </InputAdornment>}
                            />
                        </FormControl>
                    </form>
                </div>
            </Grid >
        );
    }
}

export default withStyles(styles, { withTheme: true })(ConversationThread);