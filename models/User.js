const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    domain: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = User = mongoose.model('user', ItemSchema);