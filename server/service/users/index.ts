import { PrismaClient } from '@prisma/client'
import { users } from '$prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

export const signup = async (user: Pick<users, 'email' | 'password'>) => {
  const hashPassword = await hash(user.password, 4)
  user.password = hashPassword
  try {
    const [result] = await prisma.$transaction([
      prisma.users.create({ data: user })
    ])
    delete (result as Partial<users>).password
    return result
  } catch (err) {
    console.error(err)
    throw err
  }
}
