import './login.css'
import React, { useState } from 'react'

export default function Login( props ) {
  const [values, setValues] = useState({ username: '', password: '', remember: true})

  function handleInputChange( e ) {
    let {name, value} = e.target
    if( e.target.type === 'checkbox' ) {
      value = e.target.checked
    }
    
    setValues({...values, [name]: value})
  }

  function handleOnClick(e) {
    e.preventDefault()
    props.signIn( values.username, values.password, values.remember )
  }

  return (
    <div className="container">
      <div className="card card-container">
          <img id="profile-img" alt="avatar" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
          <p id="profile-name" className="profile-name-card"></p>
          <form className="form-signin">
              <span id="reauth-email" className="reauth-email">{ props.errorMessage }</span>
              <input type="email" onChange={ handleInputChange } value={ values.username } name="username" className="form-control" placeholder="Email address" autoComplete="username" required autoFocus></input>
              <input type="password" onChange={ handleInputChange } value={ values.password } name="password" className="form-control" placeholder="Password" autoComplete="current-password" required></input>
              <div id="remember" className="checkbox">
                  <label>
                      <input type="checkbox" onChange={ handleInputChange } checked={ values.remember } name="remember" ></input> Remember me
                  </label>
              </div>
              <button onClick={ handleOnClick } className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
          </form>
          <a href="/forgot" className="forgot-password">
              Forgot the password?
          </a>
      </div>
    </div>

  )
}