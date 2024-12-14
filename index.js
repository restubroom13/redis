const { Redis } = require('ioredis')

class RedisClient {
	config() {
		return new Redis({
			host: 'localhost',
			port: 6379,
			tls: false
		})
	}

	setCacheData(key, data) {
		return this.config().set(key, data)
	}

	getCacheData(key) {
		return this.config().get(key)
	}
}

const redis = new RedisClient()
redis.setCacheData("name", "max cavalera").then(console.log).catch(console.error)
redis.getCacheData("name").then(console.log).catch(console.error).finally(() => process.exit(0))

redis.setCacheData("age", "25").then(console.log).catch(console.error)
redis.getCacheData("age").then(console.log).catch(console.error).finally(() => process.exit(0))

redis.setCacheData("address", "brazil").then(console.log).catch(console.error)
redis.getCacheData("address").then(console.log).catch(console.error).finally(() => process.exit(0))