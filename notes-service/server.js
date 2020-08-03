const config    = require( './config' )
const ronin 		= require( 'ronin-server' )
const database  = require( 'ronin-database' )
const auth      = require( 'ronin-auth' )
const rbac			= require( 'ronin-rbac' )
const mocks 		= require( 'ronin-mocks' )

async function main() {

	try {
		console.log( `config.database.connectionstring ${config.database.connectionstring}` )
    await database.connect( config.database.connectionstring )

    const server = ronin.server({
			port: config.server.port
		})

		server.use( '/services/m/', mocks.server( server.Router()) )

    const result = await server.start()
    console.info( result )

	} catch( error ) {
		console.error( error )
	}

}

main()
