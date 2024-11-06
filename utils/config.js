require('dotenv').config()

const PORT = process.env.PORT || 3000
const TIME_INTERVAL = process.env.TIME_INTERVAL || 5000

module.exports = { PORT, TIME_INTERVAL }
