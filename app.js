const express=require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//Connect To Database
mongoose.connect(config.database);

//On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
});

//On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error ' + err);
});

const app = express();

const adminUsers = require('./routes/admins');

const managers = require('./routes/managers');

//Port Number
const port = 3000;

//Cors Middleware
app.use(cors());

//Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));
// app.use('/admin', express.static(path.join(__dirname, 'admin')));

//Body Parser Middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/user', adminUsers);

app.use('/manager', managers);

//Index Route
app.get('/', (req, res)=>{
    res.send('Invalid Endpoint');
})
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/index.html'));
}); 
//Start Server
app.listen(port, ()=>{
    console.log('Server started on port ' + port);
});
