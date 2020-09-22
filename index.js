const express =  require ('express');
const mongoose = require('mongoose');
const path = require('path');

const key = require(path.join(__dirname, '/config/keys'));
const host = key.host;
const port = key.port;
const dbUrl = key.mongoUrl;
const app = express();

mongoose
    .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log('Error when connecting to db : ' + err));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/login', require(path.join(__dirname, '/routes/login')));

app.listen(port, host, () => console.log(`tomcash login service is running on port ${port}`));