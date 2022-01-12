const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()

const app = express()
require('./database/connection/database')

app.set('port', process.env.PORT || 3400)

app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(require('./routes/posts.routes'))

app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
})