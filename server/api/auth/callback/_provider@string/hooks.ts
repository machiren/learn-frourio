import { defineHooks } from './$relay'
import { PrismaClient } from '@prisma/client'
import { Provider } from '../../../../types/users/index'
import {
  GoogleOAuth2Response,
  Id_Token_Decode_Content
} from '../../../../types/oauth2/google'

const prisma = new PrismaClient()

export default defineHooks((fastify) => ({
  preHandler: async (req, reply, done) => {
    const result = (await (fastify as any).googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(
      req
    )) as GoogleOAuth2Response
    const oauth2User = fastify.jwt.decode<Id_Token_Decode_Content>(
      result.id_token,
      { json: true }
    )!
    let user = await prisma.users.findFirst({
      where: { providerId: oauth2User!.sub }
    })
    if (!user) {
      const [result] = await prisma.$transaction([
        prisma.users.create({
          data: {
            providerId: oauth2User.sub,
            provider: Provider.Google,
            email: oauth2User?.email,
            pictureUrl: oauth2User.picture
          }
        })
      ])
      user = result
    }
    const jwtToken = await reply.jwtSign({ id: user.id }, { expiresIn: '7d' })
    reply.setCookie('token', jwtToken, {
      sameSite: 'strict',
      path: '/',
      secure: process.env.NODE_ENV === 'development' ? false : true,
      httpOnly: true,
      maxAge: 604800
    })
    reply.redirect(`${process.env.WEB_ORIGIN}/profile`)
    done()
  }
}))
