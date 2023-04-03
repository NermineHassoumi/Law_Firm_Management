const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TypeSchema = new Schema({
    Email: String,
    
}, {timestamps: true})




module.exports = mongoose.model('type', TypeSchema)