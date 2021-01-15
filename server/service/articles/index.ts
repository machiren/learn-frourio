import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const findArticles = async () => {
  try {
    const articles = prisma.articles.findMany({ take: 10 })
    return articles
  } catch (err) {
    console.error(err)
    throw err
  }
}
