const awsLambdaFastify = require('aws-lambda-fastify')
const fastify = require('./index').fastify;

const proxy = awsLambdaFastify(fastify)

module.exports.handler = proxy