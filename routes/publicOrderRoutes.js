const mongoose = require('mongoose')
const keys = require('../client/src/config/keys');

// const PublicOrder = mongoose.model('publicOrders')
const Order = mongoose.model('orders')
const Global = mongoose.model('global')

module.exports = app => {
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
}