const router = require('express').Router()
const authentication = require('../middlewares/authentication')
const userController = require('../controllers/userController')
const movieController = require('../controllers/movieControllers')
const watchListController = require('../controllers/WatchList')

router.post('/register', userController.register)
router.post('/login', userController.login)

router.use(authentication)
router.get('/movies/now_playing', movieController.now_playing)
router.get('/movies/getDetail/:id', movieController.getDetail)
router.get('/movies/upcoming', movieController.upcoming)
router.get('/movies/top_rated', movieController.topRated)

router.get('/movies/watchList', watchListController.showWatchList)
router.post('/movies/watchList', watchListController.addWatchList)
router.delete('/movies/watchList/:id', watchListController.deleteWatchList)

module.exports = router