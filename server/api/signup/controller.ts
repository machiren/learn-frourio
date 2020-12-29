import { signup } from '$/service/users'
import { defineController } from './$relay'

export default defineController(() => ({
  post: async ({ body }) => {
    const user = await signup(body)
    return { status: 201, body: user }
  }
}))
