import { Application, json, urlencoded } from 'express'
import session from 'express-session'
const cookieParser = require('cookie-parser')
const logger = require('morgan')

export const setupMiddleware = (app: Application): void => {
  app.use(logger('dev'))
  app.use(json())
  app.use(urlencoded({ extended: false }))
  app.use(cookieParser())
  app.use(
    session({
      secret: 'secret dog',
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
      },
    })
  )
}
