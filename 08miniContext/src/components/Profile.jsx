import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)

    if (!user) {
        return (
            <h3>Please Login</h3>
        )
    }
    return (
        <div>
            Welcome {user.username}
        </div>
    )
}

export default Profile
