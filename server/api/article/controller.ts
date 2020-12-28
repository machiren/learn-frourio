import { defineController } from './$relay'

export default defineController(() => ({
  get: () => ({ status: 200, body: 'Hello' }),
  post: () => ({ status: 201, body: 'created' })
}))
