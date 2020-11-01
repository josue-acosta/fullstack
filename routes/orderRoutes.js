const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')

const Order = mongoose.model('orders')
const Global = mongoose.model('global')

module.exports = app => {
    app.get('/api/orders', requireLogin, async (req, res) => {
        const orders = await Order.find({})

        res.send(orders);
    })

    app.post('/api/submit-order', async (req, res) => {
        const id = '5f9df817657ba642c9e1a45c'
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