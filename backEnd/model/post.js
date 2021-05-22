// IMPORT MONGOOSE 
const mongoose = require('mongoose');
// ADDING SCHEMA
const Schema = mongoose.Schema;
// INTIALIZE THE SCHEMA 
let post = new Schema({
    // ADDING TITLE ON SCHEMA
  title: {
    type: String
  },
    // ADDING DESCREPTION ON SCHEMA
  desc: {
    type: String
  },
    // ADDING IMAGE URL ON SCHEMA
  imageUrl: {
    type: String
  }
}, {
  collection: 'post'
})

module.exports = mongoose.model('Post', post)