const { Comment, User } = require("../models");

class CommentController {
    static showAllComment(req, res, next) {
        let movieId = req.params.movieId;        
        Comment.findAll({
            where: {
                movieId
            }
        })
        .then((data) => {         
            console.log(data, 'data');   
            res.status(200).json(data)
        })
        .catch((err) => {
            next(err)
        })
    }
    
    static addComment(req, res, next) {
        let newComment = {
            message: req.body.message,
            UserId: req.nowLogged.id,
            movieId: +req.params.movieId
        }
        Comment.create(newComment)
        .then((response) => {
            console.log(response, 'res');
            res.status(201).json(response)
        })
        .catch((err) => {
            next(err)
        })
    }
}

module.exports = CommentController