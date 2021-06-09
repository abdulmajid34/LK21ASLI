if (process.env.NODE_ENV !== "production"){
    require ("dotenv").config()
}
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const routes = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.use(errorHandler)

// app.listen(PORT, () => {
//     console.log('running on PORT', PORT);
// })

module.exports = app