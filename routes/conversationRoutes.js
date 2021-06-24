const axios = require('axios')
const keys = require('../config/keys')
const client = require('twilio')(keys.twilioAccountSid, keys.twilioAuthToken);
const basicAuthToken = Buffer.from(`${keys.twilioAccountSid}:${keys.twilioAuthToken}`, 'utf8').toString('base64')
const twilioUrl = keys.twilioUrl


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
        .create({ identity: 'testPineapple' })
        .catch(err => console.log('Unable to bind Participant', err));
}

createConversation = (res) => {
    client.conversations.conversations
        .create({ friendlyName: res.req.query.From })
        .then(conversation => {
            console.log(`Conversation '${conversation.friendlyName}' Sucessfully Created`)
            addParticipantsToConversation(conversation)
        })
        .catch(err => console.log('Unable to Create Conversation', err));
}


module.exports = app => {
    app.post('/api/conversation', async (req, res) => {
        // Get a list of conversations
        const conversationList = await axios.get(`${twilioUrl}`, {
            headers: {
                'Authorization': `Basic ${basicAuthToken}`
            },
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
            createConversation(res)
        }

        // Create Conversation if it doesn't already exisit
        conversations.forEach(element => {
            if (element.friendly_name !== res.req.query.From) {
                createConversation(res)
            }
        });
    })
}