import React from 'react'

const User = ({ match }) => (
    <div>
        Username: { match.params.login }
    </div>
)

export default User;
