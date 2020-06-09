require('./models/db');

const express = require('express');
const path = require('path');
const exphbd = require('express-handlebars');
const employeeController = require('./controllers/employeeController');
const bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbd({extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Express server started port : 3000');
});

app.use('/employee', employeeController);