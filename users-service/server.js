const config    = require( './config' )
const ronin 		= require( 'ronin-server' )
const database  = require( 'ronin-database' )
const auth      = require( 'ronin-auth' )
const rbac			= require( 'ronin-rbac' )

async function main() {

	try {
    await database.connect( config.database.connectionstring )

    const server = ronin.server({
			port: config.server.port
		})

    auth.init({
			secret: config.rbac.secret,
			usersCollection: config.rbac.usersCollection
		})

		rbac.init({	
			secret: config.rbac.secret,
			usersCollection: config.rbac.usersCollection,
			permissions: {
				"admin": [{
					"entity": "*",
					"permissions": [ "*" ]
				}],
				"read-only": [{
					"entity": "*",
					"permissions": [ "read" ]
				}]
			}
		})

		server.use( '/auth', auth.server( server.Router(), rbac ) )

    const result = await server.start()
    console.info( result )

	} catch( error ) {
		console.error( error )
	}

}

main()
