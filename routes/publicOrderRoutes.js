const mongoose = require('mongoose')
const keys = require('../config/keys');

// const PublicOrder = mongoose.model('publicOrders')
const Order = mongoose.model('orders')
const Global = mongoose.model('global')

module.exports = app => {
    app.get('/api/public-orders', async (req, res) => {
        res.send("Hello from public orders")
    })

    app.post('/api/submit-public-order', async (req, res) => {
        const id = keys.countNumber
        const { count } = await Global.findById(id)

        Global.findByIdAndUpdate(id, { $inc: { count: 1 } }, () => { })

        const {
            name,
            phoneNumber,
            cakeSize,
            flavor1,
            flavor2,
            filling,
            dateTime,
            celebratedName,
            celebratedAge,
            celebratedText
        } = req.body;

        const order = new Order({
            orderNumber: count,
            name,
            phoneNumber,
            cakeSize,
            flavor1,
            flavor2,
            filling,
            dateTime,
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

    // app.get('/api/order/:orderID', async (req, res) => {
    //     const order = await Order.findById(req.params.orderID)

    //     res.send(order);
    // })

    // app.get('/api/orders', requireLogin, async (req, res) => {
    //     const orders = await Order.find({})

    //     res.send(orders);
    // })
}