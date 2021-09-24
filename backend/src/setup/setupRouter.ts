import { Application } from 'express'

export const setupRouter = (app: Application): void => {
  const indexRouter = require('@/routes/index')
  const usersRouter = require('@/routes/users')
  app.use('/api', indexRouter)
  app.use('/api/users', usersRouter)
}
