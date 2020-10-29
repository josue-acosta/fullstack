const requireLogin = require('../middlewares/requireLogin')

module.exports = app => {
    app.get('/api/orders', requireLogin, (req, res) => {
        res.send({ "messgae": "list of orders" });
    })
}