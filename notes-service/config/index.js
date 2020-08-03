module.exports = {
	server: {
		port: process.env.SERVER_PORT
	},
	database: {
		connectionstring: process.env.DATABASE_CONNECTIONSTRING
	},
	rbac: {
		secret: process.env.SESSION_SECRET,
		usersCollection: process.env.RBAC_USERS_COLLECTION
	}
}