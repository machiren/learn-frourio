import { users } from '$prisma/client'

export type Methods = {
  post: {
    reqBody: Pick<users, 'email' | 'password'>
    status: 201
    resBody: Omit<users, 'password'>
  }
}
