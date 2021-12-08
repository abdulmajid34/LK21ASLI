const { User } = require('../models')
const { sign } = require('../helpers/jwt')
const { comparePassword } = require('../helpers/bcrypt')

class UserController {
    static async register(req, res, next) {
        try {
            let { username, email, password } = req.body
            let data = await User.create({
                username,
                email,
                password
            })
            // console.log(data, 'berhasil register');
            res.status(201).json({ id: data.id, email: data.email })
        }
        catch(err) {
            console.log(err);
            next(err)
        }
    }
    static async login(req, res, next) {
        try {
            let { email, password } = req.body
            let data = await User.findOne({
                where: {
                    email
                }
            })
            if(data) {
                let isPassword = comparePassword(password, data.password)
                if(isPassword) {
                    let token = sign({
                        id: data.id,
                        email: data.email
                    })
                    res.status(200).json({ id: data.id, email: data.email, username: data.username, access_token: token })
                } else {
                    throw { name: 'Unauthorize'}
                }
                
            } else {
                throw { name: 'Unauthorize'}
            }
        }
        catch(err) {
            console.log(err);
            next(err)
        }
    }
}

module.exports = UserController