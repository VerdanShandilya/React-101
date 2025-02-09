import React from 'react'
import UserContext from '../Context/UserContext'
import { useContext } from 'react'

function Profile() {
    const {user} =useContext(UserContext);
  return (
    <div>
        {!user ?<p>please login</p> : <h1>{user}</h1>}
    </div>
  )
}

export default Profile
