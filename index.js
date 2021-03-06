const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import routes
const authroute = require('./routes/auth');

dotenv.config();



//Connect to DB
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true},
() => {console.log('connected to DB!')}
);

//Middleware
app.use(express.json());

//Route middleware
app.use('/api/user', authroute);

app.listen(3000, () => {console.log('server is up and running')})