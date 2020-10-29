const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')

const Survey = mongoose.model('surveys')

module.exports = app => {
    app.post('/api/surveys', requireLogin, (req, res) => {
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
            survey.save();
            res.send(req.user);
        } catch (err) {
            res.status(422).send(err);
        }
    })
}