const requireLogin = require('../middlewares/requireLogin')

module.exports = app => {
    app.get('/api/lorem-ipsum', requireLogin, (req, res) => {
        res.send({ 'messgae': 'list of orders' });
    })
}