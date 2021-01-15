import { articles } from '@prisma/client'

export type Methods = {
  get: {
    resBody: articles[]
  }
}
