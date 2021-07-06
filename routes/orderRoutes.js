const mongoose = require('mongoose')
// const requireLogin = require('../middlewares/requireLogin') [ DEMO ]
const keys = require('../config/keys');

const Order = mongoose.model('orders')
const Global = mongoose.model('global')

module.exports = app => {
    app.get('/api/order/:orderID', async (req, res) => {
        const order = await Order.findById(req.params.orderID)

        res.send(order);
    })

    // app.get('/api/orders', requireLogin, async (req, res) => [ DEMO ]
    app.get('/api/orders', async (req, res) => {
        const orders = await Order.find({})

        res.send(orders);
    })

    // app.get('/api/orders', requireLogin, async (req, res) => { [ DEMO ]
    app.post('/api/submit-order', async (req, res) => {
        const id = keys.countNumber
        const { count } = await Global.findById(id)

        Global.findByIdAndUpdate(id, { $inc: { count: 1 } }, () => { })

        const {
            name,
            phoneNumber,
            cakeSize,
            price,
            flavor1,
            flavor2,
            filling,
            salesCategory,
            dateTime,
            decoration,
            printOut,
            celebratedName,
            celebratedAge,
            celebratedText
        } = req.body;

        const order = new Order({
            orderNumber: count,
            name,
            phoneNumber,
            cakeSize,
            price,
            flavor1,
            flavor2,
            filling,
            salesCategory,
            dateTime,
            decoration,
            printOut,
            celebratedName,
            celebratedAge,
            celebratedText
        });

        try {
            order.save();
            res.send(req.user);
        } catch (err) {
            res.status(422).send(err);
        }
    })
}