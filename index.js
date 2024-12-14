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

redis.setCacheData("dateofbirth", "1995-08-17").then(console.log).catch(console.error)
redis.getCacheData("dateofbirth").then(console.log).catch(console.error).finally(() => process.exit(0))

redis.setCacheData("dateofbirth", "1995-08-17").then(console.log).catch(console.error)
redis.getCacheData("dateofbirth").then(console.log).catch(console.error).finally(() => process.exit(0))

redis.setCacheData("placeofbirt", "jakarta").then(console.log).catch(console.error)
redis.getCacheData("placeofbirt").then(console.log).catch(console.error).finally(() => process.exit(0))

redis.setCacheData("country", "indonesia").then(console.log).catch(console.error)
redis.getCacheData("country").then(console.log).catch(console.error).finally(() => process.exit(0))

redis.setCacheData("city", "jakarta").then(console.log).catch(console.error)
redis.getCacheData("city").then(console.log).catch(console.error).finally(() => process.exit(0))

redis.setCacheData("province", "jakarta selatan").then(console.log).catch(console.error)
redis.getCacheData("province").then(console.log).catch(console.error).finally(() => process.exit(0))

redis.setCacheData("postalcode", "16536").then(console.log).catch(console.error)
redis.getCacheData("postalcode").then(console.log).catch(console.error).finally(() => process.exit(0))

redis.setCacheData("npwp", "201543502293").then(console.log).catch(console.error)
redis.getCacheData("npwp").then(console.log).catch(console.error).finally(() => process.exit(0))

redis.setCacheData("sim", "201543502294").then(console.log).catch(console.error)
redis.getCacheData("sim").then(console.log).catch(console.error).finally(() => process.exit(0))

redis.setCacheData("ktp", "201543502291").then(console.log).catch(console.error)
redis.getCacheData("ktp").then(console.log).catch(console.error).finally(() => process.exit(0))

redis.setCacheData("schols", "ratujaya").then(console.log).catch(console.error)
redis.getCacheData("schols").then(console.log).catch(console.error).finally(() => process.exit(0))