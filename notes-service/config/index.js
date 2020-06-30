module.exports = {
	server: {
		port: process.env.SERVER_PORT
	},
	database: {
		connectionstring: process.env.DATABASE_CONNECTIONSTRING
	},
	session: {
		secret: process.env.SESSION_SECRET
	}
}