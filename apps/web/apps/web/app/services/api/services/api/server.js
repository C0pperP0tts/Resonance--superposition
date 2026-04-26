const Fastify = require('fastify');
const cors = require('@fastify/cors');
const jwt = require('@fastify/jwt');

const app = Fastify();

app.register(cors, { origin: true });

app.register(jwt, {
  secret: 'super_secret_key'
});

app.get('/health', async () => {
  return { status: 'ok' };
});

app.listen({ port: 4000, host: '0.0.0.0' }, (err) => {
  if (err) throw err;
  console.log('Server running');
});
