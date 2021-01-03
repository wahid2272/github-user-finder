import React from 'react';
import SingleUser from './SingleUser';
import Spinner from './Spinner';

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

const AllUsers = ({ users, loading }) => {
  if(loading) {
    return <Spinner/>;
  }
  else {
    return (
        <div style={userStyle}>
          {users.map(user => (<SingleUser key={user.id} user={user}/> 
          ))}
        </div>
      );
    }
  }

export default AllUsers;