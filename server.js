require('./models/db');

const express = require('express');
const path = require('path');
const exphbd = require('express-handlebars');
const employeeController = require('./controllers/employeeController');

var app = express();

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbd({extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Express server started port : 3000');
});

app.use('/employee', employeeController);