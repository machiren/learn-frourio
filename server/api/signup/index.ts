import { users } from '$prisma/client'
import { SignUpBody } from '../../validators/index'

export type Methods = {
  post: {
    reqBody: SignUpBody
    status: 201
    resBody: Omit<users, 'password'>
  }
}
