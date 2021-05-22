// ADD POST MODEL 
let Post = require('../model/post');
// ADD Comment MODEL 
let Comment = require('../model/comment');

// CREATE A FUNCTION TO ADD POST 
exports.addPost = (req, res, next) => {
    //FROM POST OBJECT CREATE A ONE BY THE REQUEST DATA
    Post.create(req.body, (error, data) => {
        // HANDLE ANY ERROR ACCURE 
        if (error) {
            return next(error)
        } else {
            // RETURN THE DATA 
            res.json(data)
        }
    })
}
// FUNCTION TO GET ALL POSTS FROM DATABASE
exports.getAllPosts = (req, res) => {
    Post.find((error, data) => {
        // HANDLE ANY ERROR ACCURE 
        if (error) {
            return next(error)
        } else {
            // RETURN THE DATA 
            res.json(data)
        }
    })
}
// FUNCTION TO DELETE ONE POST BY THE POST ID 
exports.deletePost = (req, res, next) => {
    Post.findByIdAndRemove(req.params.id, (error, data) => {
        // HANDLE ANY ERROR ACCURE 
        if (error) {
            return next(error);
        } else {
            // RETURN THE DATA 
            res.status(200).json({
                msg: data
            })
        }
    });
}
// FUNCITON TO RETURN THE ONE POST  
exports.getOnePost = (req, res) => {
    Post.findById(req.params.id, (error, data) => {
        // HANDLE ANY ERROR ACCURE 
        if (error) {
            return next(error)
        } else {
            // RETURN THE DATA 
            res.json(data)
        }
    });
}
// FUNCITON TO UPDATE THE POST 
exports.updatePost = (req, res, next) => {
    Post.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        // HANDLE ANY ERROR ACCURE 
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
        }
    });
}
//FUNCITON TO ADD THE COMMENT IN THE DB 
exports.addComment = (req, res, next) => {
    Comment.create(req.body, (error, data) => {
        // HANDLE ANY ERROR ACCURE 
        if (error) {
            return next(error)
        } else {
            // RETURN THE DATA 
            res.json(data)
        }
    })
}
// FUNCTION TO DELETE THE COMMENT BY THE COMMENT ID 
exports.deleteComment = (req, res, next) => {
    Comment.findByIdAndRemove(req.params.id, (error, data) => {
        // HANDLE ANY ERROR ACCURE 
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                // RETURN THE DATA 
                msg: data
            })
        }
    });
}
// FUNCITON TO GET ALL COMMENTS 
exports.getComments = (req, res) => {
    Comment.find().where('postId').equals(req.params.id).exec(
        function (error, data) {
            // HANDLE ANY ERROR ACCURE 
            if (error) {
                return next(error)
            } else {
                // RETURN THE DATA 
                res.json(data)
            }
        })
}