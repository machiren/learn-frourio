import { defineController } from './$relay'

export default defineController((fastify) => ({
  get: () => {
    return { status: 200, body: 'Hello' }
  }
}))
