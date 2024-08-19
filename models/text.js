const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const textSchema = new Schema({
    text: {
        type: String, 
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestampes: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password;
            return ret;
        }
    }
})


module.exports = mongoose.model('Text', textSchema );
