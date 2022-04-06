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


// Start the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
