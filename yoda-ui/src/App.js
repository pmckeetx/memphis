import 'bootstrap/dist/css/bootstrap.css'
import React, { useState } from 'react'

import users from './services/users'

import Login from './Login'
import Dashboard from './Dashboard'

function App() {
  const [isLoading, setIsLoading] = useState( false )
  const [isLoggedIn, setIsLoggedIn] = useState( false )
  const [errorMessage, setErrorMessage] = useState()

  async function onSignIn( username, password, remember ) {
    try {
      const results = await users.login( username, password )
      if( results && results.code === 'success' ) {
        setIsLoggedIn( true )
        setIsLoading( false )
      } else {
        setIsLoading( false )
        setErrorMessage( 'Username and password are incorrect' )
      }
    } catch( error ) {
      console.error( error )
    }
    
    
  }
  

  
  return (
    <div className="App">
      { isLoading
        ? <h3>Loading...</h3>
        : isLoggedIn 
          ? <Dashboard />
          : <Login signIn={ onSignIn } errorMessage={ errorMessage }></Login>
      }
    </div>
  )
}

export default App
