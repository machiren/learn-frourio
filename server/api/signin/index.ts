import { User } from '../../types/users/index'
export type Methods = {
  post: {
    reqBody: Pick<User, 'email' | 'password'>
    resBody: {}
  }
}
