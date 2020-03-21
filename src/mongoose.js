const mongoose = require('mongoose')
const winston = require('winston')

mongoose
  .connect(`${process.env.DB_HOST}:${process.env.DB_PORT}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(error => winston.error(error))

mongoose.connection.on('open', () => winston.info('MongoDB connected'))

mongoose.connection.on('error', () => {
  throw new Error('unable to connect to database.')
})

module.exports = mongoose

