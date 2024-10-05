const config = require('./utils/config')
const TIME_INTERVAL = config.TIME_INTERVAL
const express = require('express')
const { v4: uuidv4 } = require('uuid')
const app = express()
const logger = require('./utils/logger')

const hashedTimeStamp = () => {
    const timeStamp = new Date().toISOString()
    const hash = uuidv4()
    return `${timeStamp}: ${hash}`
}

let stamp = ''
setInterval(() => {
    stamp = hashedTimeStamp()
    logger.info(stamp)
}, TIME_INTERVAL);

app.get('/', (req, res) => {
    res.json({stamp})
})


module.exports = app
