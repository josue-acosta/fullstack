const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')

const Survey = mongoose.model('surveys')

module.exports = app => {
    // app.post('/api/surveys', requireLogin, async (req, res) => {
    app.post('/api/surveys', async (req, res) => {
        console.log("Hello from app.post('/api/surveys')")
        console.log(req.user)
        console.log(req.body)
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            _user: req.user.id,
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            dateSent: Date.now()
        });

        try {
            await survey.save();
            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }
    })
}