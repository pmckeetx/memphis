const ronin 		= require( 'ronin-server' )
const config    = require( './config' )

async function main() {
	const server = ronin.server({
    port: config.server.port || 8080
  })

	try {

    server.get( '/', (req, res) => {
      res.send( '<h1>Notes Service</h1>' )
    })

    const result = await server.start()
    console.info( result )

	} catch( error ) {
		console.error( error )
	}

}

main()
