import React, { Component } from 'react';
import { Client as ConversationsClient } from "@twilio/conversations";

// components
import ConversationsList from './ConversationsList'
import ConversationThread from './ConversationThread'

// styles
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        width: '100%',
        height: 475,
        backgroundColor: theme.palette.background.paper,
    }
});

const { getToken } = require('../../../util/get-token');


class ConversationPage extends Component {
    state = {
        name: "MiSystema",
        token: null,
        statusString: null,
        conversationsReady: false,
        conversations: [],
        selectedConversationSid: null,
        newMessage: ""
    };

    componentDidMount = () => {
        this.mountToken();
        this.setState({ statusString: "Fetching credentials…" });
    };

    mountToken = () => {
        const myToken = getToken()
        this.setState({ token: myToken }, this.initConversations);
    };

    initConversations = async () => {
        window.conversationsClient = ConversationsClient;
        this.conversationsClient = await ConversationsClient.create(this.state.token);
        this.setState({ statusString: "Connecting to Twilio…" });

        this.conversationsClient.on("connectionStateChanged", (state) => {
            if (state === "connecting")
                this.setState({
                    statusString: "Connecting to Twilio…",
                    status: "default"
                });
            if (state === "connected") {
                this.setState({
                    statusString: "You are connected.",
                    status: "success"
                });
            }
            if (state === "disconnecting")
                this.setState({
                    statusString: "Disconnecting from Twilio…",
                    conversationsReady: false,
                    status: "default"
                });
            if (state === "disconnected")
                this.setState({
                    statusString: "Disconnected.",
                    conversationsReady: false,
                    status: "warning"
                });
            if (state === "denied")
                this.setState({
                    statusString: "Failed to connect.",
                    conversationsReady: false,
                    status: "error"
                });
        });
        this.conversationsClient.on("conversationJoined", (conversation) => {
            this.setState({ conversations: [...this.state.conversations, conversation] });
        });
        this.conversationsClient.on("conversationLeft", (thisConversation) => {
            this.setState({
                conversations: [...this.state.conversations.filter((it) => it !== thisConversation)]
            });
        });
        this.conversationsClient.on("tokenAboutToExpire", () => {
            const updatedToken = getToken()
            this.conversationsClient.updateToken(updatedToken)
        });
    }

    render() {
        const { classes } = this.props;
        const { conversations, selectedConversationSid, status } = this.state;

        const selectedConversation = conversations.find((item) => {
            return item.sid === selectedConversationSid
        });

        let conversationContent
        if (selectedConversation) {
            conversationContent = (
                <ConversationThread
                    conversationProxy={selectedConversation}
                    myIdentity={this.state.name}
                />)
        } else if (status !== "success") {
            conversationContent = (
                <Grid item xs={9}>
                    <div className={classes.root}></div>
                </Grid>)
        } else {
            conversationContent = conversationContent = (
                <Grid item xs={9}>
                    <div className={classes.root}></div>
                </Grid>);
        }

        return (
            <>
                <h2>{this.state.statusString} Text 515-414-8323 to see yor chat here.</h2>
                <Grid container justify="center" spacing={1}>
                    <ConversationsList
                        conversations={conversations}
                        selectedConversationSid={selectedConversationSid}
                        onConversationClick={(item) => {
                            this.setState({ selectedConversationSid: item });
                        }}
                    />
                    {conversationContent}
                </Grid>
            </>
        );
    }
}

export default withStyles(styles, { withTheme: true })(ConversationPage);