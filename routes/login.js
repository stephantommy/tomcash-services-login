const express = require('express');
const path = require('path');

const router = express.Router();

const User = require(path.join(__dirname, '../models/User'));

router.post('/', function(req, res) {
    console.log('Logging in...');
    // console.log('credentials: ' + req.body.domain);

    // User.find( {domain: req.body.domain} )
    //     .then(users => {
    //         console.log('Log in success');
    //         res.json({"status": "Success"});
    //     })
    //     .catch(error => {
    //         console.log('Log in failed');
    //         res.status(401).json({"status": "Failed"});
    //     });

    const domain = req.body.inputDomain;
    const password = req.body.inputPassword;

    if (domain === 'Giorno' && password === 'abc123') {
        res.json({"status": "Success"});
    }
    else {
        res.status(401).json({"status": "Failed"});
    }
});

router.get('/', function(req, res) {
    console.log('getting user list...');

    User.find()
        .sort({ domain: 1 })
        .then(users => {
            console.log('User list : ', {userList : users});
            res.json({userList : users});
        });
});

router.post('/addUser', function(req, res) {
    console.log('getting user list...');
    console.log('new User', req.body);
    const newUser = new User(req.body);

    newUser.save();
    User.find()
        .sort({ domain: 1 })
        .then(users => {
            console.log('User list : ', {userList : users});
            res.json({userList : users});
        });
});

module.exports = router;