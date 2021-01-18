import path from 'path'
import Fastify from 'fastify'
import helmet from 'fastify-helmet'
import cors from 'fastify-cors'
import fastifyStatic from 'fastify-static'
import fastifyJwt from 'fastify-jwt'
import fastifyCookie from 'fastify-cookie'
import oauthPlugin from 'fastify-oauth2'
import { JWT_SECRET, SERVER_PORT, BASE_PATH } from './service/envValues'
import server from './$server'

export const fastify = Fastify()

fastify.register(helmet)
fastify.register(fastifyCookie)
fastify.register(cors, {
  origin: ['http://localhost:3300'],
  credentials: true
})
fastify.register(fastifyJwt, { secret: JWT_SECRET })
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
  prefix: BASE_PATH
})
fastify.register(oauthPlugin, {
  name: 'googleOAuth2',
  credentials: {
    client: {
      id: process.env.GOOGLE_CLIENT_ID || 'XXXXXXXX',
      secret: process.env.GOOGLE_CLIENT_SECRET || 'XXXXXXXX'
    },
    auth: oauthPlugin.GOOGLE_CONFIGURATION
  },
  scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
  ],
  startRedirectPath: '/api/signin/google',
  callbackUri: `${
    process.env.API_ORIGIN || 'http://localhost:8080'
  }/api/auth/callback/google`
})

server(fastify, { basePath: BASE_PATH })

fastify.listen(SERVER_PORT)
