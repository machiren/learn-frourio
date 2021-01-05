import { defineHooks } from './$relay'
import { User } from '../../types/users/index'
import { signin } from '../../service/signin/index'

export default defineHooks(() => ({
  preHandler: async (req, reply, done) => {
    const auth = await signin(req.body as Pick<User, 'email' | 'password'>)
    const jwtToken = await reply.jwtSign({ id: auth.id })
    reply.setCookie('token', jwtToken, {
      sameSite: 'strict',
      path: '/',
      secure: process.env.NODE_ENV === 'development' ? false : true,
      httpOnly: true,
      maxAge: 604800
    })
    done()
  }
}))
