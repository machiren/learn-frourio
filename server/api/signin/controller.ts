import { defineController } from './$relay'

export default defineController((fastify) => ({
  post: async ({ body }) => {
    return { status: 200, body: {} }
  }
}))
