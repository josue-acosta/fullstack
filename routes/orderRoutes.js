const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')

const Order = mongoose.model('orders')

module.exports = app => {
    // app.get('/api/survery-list', requireLogin, async (req, res) => {
    //     const surveys = await Survey.find({ _user: req.user.id }).select({ recipients: false });

    //     res.send(surveys);
    // })

    app.post('/api/new-order', requireLogin, (req, res) => {
        const {
            orderNumber,
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
            orderNumber,
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

// orderNumber
// name
// phoneNumber
// cakeSize
// price
// flavor1
// flavor2
// filling
// salesCategory
// dateTime
// decoration
// printOut
// celebratedName
// celebratedAge
// celebratedText