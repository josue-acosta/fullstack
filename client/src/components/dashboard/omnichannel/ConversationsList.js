import React, { Component } from 'react';

// styles
import { withStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        width: '100%',
        height: 475,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto'
    },
    selectedConversation: {
        color: 'white',
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        }
    }
});

class ConversationsList extends Component {
    render() {
        const { classes, conversations, selectedConversationSid, onConversationClick } = this.props;

        return (
            <Grid item xs={3}>
                <div className={classes.root}>
                    <List>
                        {conversations.map(item => (
                            <ListItem
                                button
                                key={item.sid}
                                onClick={() => onConversationClick(item.sid)}
                                className={selectedConversationSid === item.sid ? classes.selectedConversation : ''}>
                                <ListItemText primary={item.friendlyName || item.sid} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Grid>
        );
    }
}

export default withStyles(styles, { withTheme: true })(ConversationsList);