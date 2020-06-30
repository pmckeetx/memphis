import config from '../config'
import rest from '../util/rest' 


async function login( username, password ) {
  return await rest.post( `${config.services.host}/auth/login`, { username, password } )
}

export default {
  login
}