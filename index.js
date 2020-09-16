const express =  require ('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3002;
const dbUrl = require('./config/keys').mongoUrl;

mongoose
    .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log('Error when connecting to db : ' + err));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/login', require('./routes/login'));

app.listen(port, () => console.log(`tomcash login service is running on port ${port}`));