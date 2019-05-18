const express = require('express');
const morgan = require('morgan');
const cors =  require('cors');
const app = express();

const { mongoose } = require('./database');

// Settings 
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

// Routes
app.use( '/api/users', require('./routes/users.routes'));
app.use( '/api/houses', require('./routes/houses.routes'));


// Angular
var path = require('path');

app.use(express.static( path.resolve('frontend/dist')));

app.get('/', function(req, res) {
    console.log("dddd");
    res.sendFile(path.resolve('frontend/dist/index.html')); // load the single view file (angular will handle the page changes on the front-end)
});

/*
app.get('/styles.css', function(req, res) {
    console.log("dddd");
    res.sendFile(path.resolve('frontend/dist/styles.css')); // load the single view file (angular will handle the page changes on the front-end)
});

app.get('/runtime.js', function(req, res) {
    console.log("dddd");
    res.sendFile(path.resolve('frontend/dist/runtime.js')); // load the single view file (angular will handle the page changes on the front-end)
});

app.get('/polyfills.js', function(req, res) {
    console.log("dddd");
    res.sendFile(path.resolve('frontend/dist/polyfills.js')); // load the single view file (angular will handle the page changes on the front-end)
});

app.get('/main.js', function(req, res) {
    console.log("dddd");
    res.sendFile(path.resolve('frontend/dist/main.js')); // load the single view file (angular will handle the page changes on the front-end)
});

/*
app.use(express.static(path.join(__dirname, 'frontend')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/src/index.html'));
  });
*/
// Init Server
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
});
