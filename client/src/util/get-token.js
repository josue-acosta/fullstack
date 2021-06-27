const AccessToken = require('twilio').jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;

module.exports = {
    getToken: () => {
        try {
            // Create a "grant" which enables a client to use Chat as a given user,
            // on a given device
            const chatGrant = new ChatGrant({
                serviceSid: process.env.REACT_APP_SERVICE_SID,
            });

            // Create an access token which we will sign and return to the client,
            // containing the grant we just created
            const token = new AccessToken(
                process.env.REACT_APP_TWILIO_ACCOUNT_SID,
                process.env.REACT_APP_TWILIO_API_KEY,
                process.env.REACT_APP_TWILIO_API_SECRET,
                {
                    identity: process.env.REACT_APP_IDENTITY
                }
            );

            // Add "grant" information to the token
            token.addGrant(chatGrant);
            return token.toJwt()
        } catch (error) {
            console.log(error)
        }
    }
};