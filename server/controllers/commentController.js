const { Comment } = require("../models");

class CommentController {
    static showAllComment(req, res, next) {
        let movieId = req.params.id;
        Comment.findAll({
            where: {
                movieId
            }
        })
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            next(err)
        })
    }
    
    static addComment(req, res, next) {
        
    }
}

module.exports = CommentController