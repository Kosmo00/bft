const express = require('express');
const morgan = require('morgan');

const app = express();

// Config
require('dotenv').config();
app.set('port', process.env.PORT || 4000);

// Middlewares
if (process.env.APP_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json());

// Routes
app.use(require('./routes'));

// Start the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});

// Main infinite loop
if (process.env.APP_ENV === 'production') {
    console.log('Logic for production');
}
