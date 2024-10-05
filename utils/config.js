require('dotenv').config()

const PORT = process.env.PORT
const TIME_INTERVAL = process.env.TIME_INTERVAL

module.exports = { PORT, TIME_INTERVAL }
