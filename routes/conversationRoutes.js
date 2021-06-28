const axios = require('axios')
const keys = require('../config/keys')
const client = require('twilio')(keys.twilioAccountSid, keys.twilioAuthToken);
const basicAuthToken = Buffer.from(`${keys.twilioAccountSid}:${keys.twilioAuthToken}`, 'utf8').toString('base64')

addParticipantsToConversation = (data) => {
    client.conversations.conversations(data.sid)
        .participants
        .create({
            'messagingBinding.address': data.friendlyName,
            'messagingBinding.proxyAddress': keys.twilioPhoneNumber
        })
        .catch(err => console.log('Unable to bind Participant', err));

    client.conversations.conversations(data.sid)
        .participants
        .create({ identity: keys.identity })
        .catch(err => console.log('Unable to bind Participant', err));
}

addInitMessageToConversation = (conversation, req) => {
    client.conversations.conversations(conversation.sid)
        .messages
        .create({
            author: conversation.friendlyName,
            body: req.body.Body
        })
        .catch(err => console.log('Unable to bind Message', err));
}

createConversation = (req) => {
    client.conversations.conversations
        .create({ friendlyName: req.body.From })
        .then(conversation => {
            addParticipantsToConversation(conversation)
            addInitMessageToConversation(conversation, req)
        })
        .catch(err => console.log('Unable to Create Conversation', err));
}

module.exports = app => {
    app.post('/api/conversation', async (req, res) => {
        try {
            // Get a list of conversations
            const conversationList = await axios.get(`${keys.twilioUrl}`, {
                headers: {
                    'Authorization': `Basic ${basicAuthToken}`
                },
            }).catch(error => {
                console.log("There's been an error in conversationList")
            });

            const { conversations } = conversationList.data

            const result = [];
            const map = new Map();
            for (const element of conversations) {
                if (!map.has(element.sid)) {
                    map.set(element.sid, true);
                    result.push({
                        sid: element.sid,
                        friendlyName: element.friendly_name
                    });
                }
            }

            // Check to see if any conversation exist
            if (conversations.length <= 0) {
                createConversation(req)
            }

            // Create Conversation if it doesn't already exisit
            const check = result.some((item) => item.friendlyName === req.body.From)
            if (check) {
                null
            } else {
                createConversation(req)
            }

        } catch (error) {
            console.log("There's been an error in POST /api/conversation");
        }
    })
}