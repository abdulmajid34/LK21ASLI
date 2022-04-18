const io = require('socket.io');
const { Comment, User } = require("./models")

io.on("connection", (socket) => {
    socket.on('join-room', (data) => {
		socket.join(data)
	})

    socket.on('refetch-match', (data) => {
		io.emit('refetch-receive', { action: 'fetch-match' })
	})

    socket.on('send-message', (payload) => {
		let chatComment = {
			UserId: payload.UserId,			
			message: payload.message,
		}
		Comment.create(chatComment, {
			include: [
				{
					model: User,
					attributes: ['id', 'username'],
				},
			],
			returning: true,
			plain: true,
		})
        .then((data) => {
            io.to("room1").emit('receive-message', data)
        })
        .catch((err) => {
            io.to("room1").emit('receive-message-fail', {
                error: 'error',
            })
        })
	})
});

module.exports = io