var redis = require('redis');
var client = redis.createClient({
  port: '6379',
  host: '127.0.0.1',
  // password  : 'redispassword',
});

client.on('error', function () {
  console.log('Redis Database error' + '\n');
});

module.exports = client;
