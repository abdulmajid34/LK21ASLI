const { Comment, User } = require("../models");

class CommentController {
    static showAllComment(req, res, next) {
        let MovieId = req.params.MovieId;        
        Comment.findAll({
            where: {
                MovieId
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
            MovieId: parseInt(req.body.MovieId)
        }
        console.log(newComment, 'comment');
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