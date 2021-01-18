const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const keys = require('../config/keys');

const Ingredient = mongoose.model('ingredients')

module.exports = app => {
    // app.get('/api/order/:orderID', async (req, res) => {
    //     const order = await Order.findById(req.params.orderID)

    //     res.send(order);
    // })

    // app.get('/api/orders', requireLogin, async (req, res) => {
    //     const orders = await Order.find({})

    //     res.send(orders);
    // })

    app.post('/api/submit-ingredient', requireLogin, async (req, res) => {
        const {
            ingredient,
            supplier,
            brand,
            asPurchasedCost,
            numberOfPackages,
            amountPerPackage,
            amountPerPackageUnit,
            yieldPercent
        } = req.body;

        const totalCaseAmount = (numberOfPackages * amountPerPackage).toString() + " " + amountPerPackageUnit

        const ediblePortionCosts = [
            {
                "unitOfMeasurment": "lbs",
                "costPerUnit": 1.474
            },
            {
                "unitOfMeasurment": "oz",
                "costPerUnit": 0.092
            }
        ]

        const newIngredient = new Ingredient({
            ingredient,
            supplier,
            brand,
            asPurchasedCost,
            numberOfPackages,
            amountPerPackage,
            amountPerPackageUnit,
            totalCaseAmount,
            yieldPercent,
            ediblePortionCost: ediblePortionCosts
        });

        try {
            newIngredient.save();
            res.send(req.user);
        } catch (err) {
            res.status(422).send(err);
        }
    })
}