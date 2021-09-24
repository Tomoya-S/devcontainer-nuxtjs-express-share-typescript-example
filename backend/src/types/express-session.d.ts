import { User } from '@shared/types/user'
declare module 'express-session' {
  interface SessionData {
    user: User
  }
}
