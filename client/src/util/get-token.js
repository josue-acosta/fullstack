const keys = require('../config/keys')
const twilioAccountSid = keys.twilioAccountSid;
const twilioApiKey = keys.twilioApiKey;
const twilioApiSecret = keys.twilioApiSecret;
const serviceSid = keys.serviceSid;
const identity = keys.identity;
const AccessToken = require('twilio').jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;


module.exports = {
    getToken: () => {
        try {
            // Create a "grant" which enables a client to use Chat as a given user,
            // on a given device
            const chatGrant = new ChatGrant({
                serviceSid: serviceSid,
            });

            // Create an access token which we will sign and return to the client,
            // containing the grant we just created
            console.log(twilioAccountSid)
            const token = new AccessToken(
                twilioAccountSid,
                twilioApiKey,
                twilioApiSecret,
                {
                    identity: identity
                }
            );

            // Add "grant" information to the token
            token.addGrant(chatGrant);
            console.log(token)
            return token.toJwt()
        } catch (error) {
            console.log(error)
        }
    }
};