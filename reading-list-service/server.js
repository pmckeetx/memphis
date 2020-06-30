const ronin 		= require( 'ronin-server' )
const routes    = require( './routes' )

async function main() {
	const server = ronin.server()

	try {
    
    server.get( '/', (req, res) => {
      res.send( '<h1>Reading List Service</h1>' )
    })

    const result = await server.start()
    console.info( result )

	} catch( error ) {
		console.error( error )
	}

}

main()
