const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

// Connect to MongoDB
const DB = process.env.DATABASE??"mongodb+srv://mindwarlock:nn23QBCpDLCxKz8R@cluster0.1wuzr0s.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
}).then(() => {console.log("Db conected")})
.catch(err => console.log('ERROR', err))


// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/view');

// routes
app.use(require('./routes/index'));
app.use(require('./routes/Registro'));

// Server config
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// in the console start mongodb with mongod
// npm run devStart
// in other console nodemon server changed to npm start on package.json
// http://localhost:5000/
