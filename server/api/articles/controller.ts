import { defineController } from './$relay'
import { findArticles } from '../../service/articles/index'

export default defineController(() => ({
  get: async () => {
    const articles = await findArticles()
    return { status: 200, body: articles }
  }
}))
