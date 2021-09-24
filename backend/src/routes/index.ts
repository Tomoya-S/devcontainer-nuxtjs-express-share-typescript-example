import { Router, Request, Response, NextFunction } from 'express'
const router = Router()

/* GET home page. */
router.get('/me', (req: Request, res: Response, next: NextFunction) => {
  req.session.user = {
    id: 1,
    login_id: 'example',
    last_name: 'john',
    first_name: 'smith',
  }
  res.json(req.session.user)
})

module.exports = router
