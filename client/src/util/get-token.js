const twilioAccountSid = 'ACdf6e48b8b0afb9802ff6446d2cb03acb';
const twilioApiKey = 'SK35d747f12f534d9248456812d9db149d';
const twilioApiSecret = '92EJm42U6o8TJ7pkBWiFdWeBGUBxz8pS';
const serviceSid = 'ISea84a3d4463f46f19fafa360e4cea195';
const identity = 'testPineapple';
const AccessToken = require('twilio').jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;

console.log(process.env)
console.log(process.env.REACT_APP_LOREM_IPSUM)
console.log(process.env.REACT_APP_IDENTITY)
console.log(process.env.REACT_APP_SERVICE_SID)

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
            return token.toJwt()
        } catch (error) {
            console.log(error)
        }
    }
};