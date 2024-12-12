const { Redis } = require('ioredis')

class RedisClient {
	config() {
		return new Redis({
			host: 'localhost',
			port: 6379,
			// tls: true
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
redis.setCacheData("name", "max cavalera from brazil hahaha").then(console.log).catch(console.error)
redis.getCacheData("name").then(console.log).catch(console.error).finally(() => process.exit(0))