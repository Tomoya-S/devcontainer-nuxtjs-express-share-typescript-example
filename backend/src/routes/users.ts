import { Router } from 'express'
import { User } from '@shared/types/user'
const router = Router()

router.get('/', (req, res, next) => {
  const mockUsers: User[] = [
    {
      id: 1,
      login_id: 'example1',
      last_name: 'example last_name1',
      first_name: 'example first_name1',
    },
    {
      id: 2,
      login_id: 'example2',
      last_name: 'example last_name2',
      first_name: 'example first_name2',
    },
    {
      id: 3,
      login_id: 'example3',
      last_name: 'example last_name3',
      first_name: 'example first_name3',
    },
  ]
  res.json(mockUsers)
})
router.get('/:id', (req, res, next) => {
  res.json('get user:' + req.params.id)
})
router.post('/', (req, res, next) => {
  res.json('created user')
})
router.delete('/:id', (req, res, next) => {
  res.json('deleted user:' + req.params.id)
})

module.exports = router
