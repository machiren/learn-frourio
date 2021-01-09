import { PrismaClient } from '@prisma/client'
import { users } from '$prisma/client'
import { compare } from 'bcrypt'
import { User } from '../../types/users/index'

const prisma = new PrismaClient()

export const signin = async ({
  email,
  password
}: Pick<User, 'email' | 'password'>): Promise<users> => {
  try {
    const auth = await prisma.users.findFirst({
      where: { email }
    })
    if (!auth) {
      throw new Error('unauthorized')
    }
    const isValid = await compare(password, auth.password!)
    if (!isValid) {
      throw new Error('unauthorized')
    }
    delete (auth as any).password
    return auth
  } catch (err) {
    console.error(err)
    throw err
  }
}
