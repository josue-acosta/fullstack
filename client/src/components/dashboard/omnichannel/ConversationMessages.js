import React, { Component } from "react";

// components
import List from '@material-ui/core/List'
import MessageBubble from "./MessageBubble";


class ConversationMessages extends Component {
    render() {
        const { messages, identity } = this.props

        return (
            <div id="messages">
                <List>
                    {messages.map(item => {
                        if (item.state.author === identity) {
                            return <MessageBubble key={item.state.index} direction="outgoing" message={item.state} />
                        } else {
                            return <MessageBubble key={item.state.index} direction="incoming" message={item.state} />
                        }
                    })}
                </List>
            </div>
        );
    }
}

export default ConversationMessages;