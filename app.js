const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// env connecttion
require('dotenv/config');

// Form Body Parser ( untuk mendapatkan value dari isi form )
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);

// Routes 
const ArtikelRoute = require('./routes/ArtikelRoute.js');

// Routing
app.use('/artikel', ArtikelRoute);

// Connect TO Database
mongoose.connect('mongodb+srv://udin:ugans123@cluster0.jb3yomn.mongodb.net/rest_express?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;

db.on('error',console.error.bind(console,'Database Not Connected'));
db.once('open',() => {
    console.log('Database Connected');
});

// Server Start
app.listen(process.env.PORT,() => {
    console.log(`App Listening on port ${process.env.PORT}`);
});
