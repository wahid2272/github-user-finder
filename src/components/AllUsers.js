import React, {useContext} from 'react';
import SingleUser from './SingleUser';
import Spinner from './Spinner';
import GithubContext from './context/githubContext';

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

const AllUsers = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

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