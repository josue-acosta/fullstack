const express = require('express');
const userModel = require('./models/user');
const orderModel = require('./models/order');
const publicOrderModel = require('./models/publicOrder');
const globalModel = require('./models/global');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const passportConfig = require('./services/passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');

// app configuration
const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

// database configuration
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log('Database Connected'))
    .catch(err => console.log('Database Not Connected', err));

// // routes
// auth routes
require('./routes/authRoutes')(app)
// dashboard routes
require('./routes/dashboardRoutes')(app)
// order routes
require('./routes/orderRoutes')(app)
// public order routes
require('./routes/publicOrderRoutes')(app)
// conversation routes
require('./routes/conversationRoutes')(app)

require('dotenv').config()
console.log(process.env)

if (process.env.NODE_ENV === 'production') {
    // express will serve production assets ( i.e client/build/main.js, client/build/main.css )
    app.use(express.static('client/build'))

    // express will serve client/build/index.html if route is not in server
    const path = require('path')
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

// run app
const PORT = process.env.PORT || 5000;
app.listen(PORT);