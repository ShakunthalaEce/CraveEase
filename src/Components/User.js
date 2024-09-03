import React from 'react'

function User(props) {
    const {name,place}=props;
  return (
    <div>
        <h3>{name}</h3>
        <h3>{place}</h3>
        <h3>Ph:no:1234567890</h3>
    </div>
  )
}

export default User