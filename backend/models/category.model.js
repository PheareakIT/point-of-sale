const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name: {
        Type: String,
        required: [true, 'category name is required !!!'],
        unique: true
    },

    note:{
        Type: String,
        required: false
    }

},{timestamps: true})

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;