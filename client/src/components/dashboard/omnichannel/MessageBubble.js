import React, { Component } from "react";

// components
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

// styles
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    messageBody: {
        maxWidth: '80%'
    },
    timestamp: {
        color: theme.palette.primary.main,
        textSize: '1rem',
        paddingLeft: '10px'
    }
});


class MessageBubble extends Component {
    render() {
        const { classes, message } = this.props
        const timestampOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }

        return (
            <>
                <ListItem>
                    <ListItemText
                        className={classes.messageBody}
                        primary={message.body}
                        secondary={message.author}
                    />
                    <div className={classes.timestamp}>{message.timestamp.toLocaleString('en-US', timestampOptions)}</div>
                </ListItem>
            </>
        )
    }
}

export default withStyles(styles, { withTheme: true })(MessageBubble);