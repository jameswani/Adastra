
const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://jamesywany1999:dRuWspBRbCplapYz@cluster0.7mjppvu.mongodb.net/test';

mongoose.connect(mongoURL, { useUnifiedTopology: true , useNewUrlParser: true});

var connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

connection.on('connected', () => {
    console.log('MongoDB connected!');
});

module.exports = mongoose;