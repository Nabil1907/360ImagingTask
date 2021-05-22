// IMPORT MONGOOSE 
const mongoose = require('mongoose');
// ADDING SCHEMA
const Schema = mongoose.Schema;
// INTIALIZE THE SCHEMA 
let comment = new Schema({
    // ADDING commentBody ON SCHEMA
    commentBody: {
    type: String
  },
  postId:{
      type: mongoose.ObjectId
  },
}, {
  collection: 'comment'
})

module.exports = mongoose.model('Comment', comment)