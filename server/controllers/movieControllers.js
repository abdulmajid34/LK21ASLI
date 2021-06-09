const axios = require('axios')
// const { User } = require('../models')
const API_KEY = process.env.API_KEY

class MovieController {
    static async now_playing(req, res, next) {
        try {
            let { data } = await axios({
                method: 'GET',
                url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=`
            })
            res.status(200).json(data.results)
        }
        catch(err) {
            console.log(err);
            next(err)
        }
    }
    static async getDetail(req, res, next) {
        try {
            let id = req.params.id
            let { data } = await axios({
                method: 'GET',
                url: `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
            })
            res.status(200).json(data)
        }
        catch(err) {
            console.log(err);
            next(err)
        }
    }
    static async popular(req, res, next) {
        try {
            let { data } = await axios({
                method: 'GET',
                url: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=`
            })
            res.status(200).json(data.results)
        }
        catch(err) {
            console.log(err);
            next(err)
        }
    }
    static async topRated(req, res, next) {
        try {
            let { data } = await axios({
                method: 'GET',
                url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=`
            })
            res.status(200).json(data.results)
        }
        catch(err) {
            console.log(err);
            next(err)
        }
    }
    static async upcoming(req, res, next) {
        try {
            let { data } = await axios({
                method: 'GET',
                url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=`
            })
            res.status(200).json(data.results)
        }
        catch(err) {
            console.log(err);
            next(err)
        }
    }
}

module.exports = MovieController