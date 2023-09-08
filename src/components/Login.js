import React from 'react'
import "../css/login.css"
import { accessUrl } from '../spotify'

const Login = () => {
  return (
    <div className='login'>
      <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo" />
      <h2><strong>Note-</strong> A spotify developer account is required for access!</h2>
      <a href={accessUrl}>LOGIN TO SPOTIFY</a>
    </div>
  )
}

export default Login
