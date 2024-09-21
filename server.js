const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./_config'); // Import the config file

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// Determine which environment we're in (production, development, or test)
const mongoURI = process.env.NODE_ENV === 'production' ? config.mongoURI.production :
                 process.env.NODE_ENV === 'test' ? config.mongoURI.test :
                 config.mongoURI.development;

// Connect to MongoDB Atlas using the connection string from _config.js
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) console.log('Error connecting to MongoDB:', err);
    else console.log('Connected to MongoDB successfully');
});

// Test if the database has connected successfully
let db = mongoose.connection;
db.once('open', () => {
    console.log('Database connected successfully');
});

// Initializing the app
const app = express();

// View Engine
app.set('view engine', 'ejs');

// Set up the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.use('/', index);
app.use('/image', image);

// Set up the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
