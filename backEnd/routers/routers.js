//  IMPORT EXPRESS
const express = require('express');
// RUN THE EXPRESS 
const app = express();
// IMPORT ROUTES FROM EXPRESS
const postRoute = express.Router();

let controller = require('../controller/controller');
// API TO GET ALL POSTS 
postRoute.route('/').get(controller.getAllPosts);
// API TO ADD POST 
postRoute.route('/add-post').post(controller.addPost);
// API TO DELETE POST 
postRoute.route('/delete-post/:id').delete(controller.deletePost);
// API TO Get post 
postRoute.route('/get-post/:id').get(controller.getOnePost);
// API TO Update Post
postRoute.route('/update-post/:id').put(controller.updatePost);
// API TO ADD Comment 
postRoute.route('/add-comment').post(controller.addComment);
// API TO DELETE Comment 
postRoute.route('/delete-comment/:id').delete(controller.deleteComment);
// API TO GET ALL COMMENT FOR POST  
postRoute.route('/get-comments/:id').get(controller.getComments);


module.exports = postRoute;

