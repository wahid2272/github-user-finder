import React, { Component } from 'react';
import SingleUser from './SingleUser';

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

class AllUsers extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'mojonbo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo'
      },
      {
        id: 2,
        login: 'defunk',
        avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
        html_url: 'https://github.com/defunkt'
      },
      {
        id: 3,
        login: 'pjhyett',
        avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
        html_url: 'https://github.com/pjhyett'
      }
    ]
  }

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (<SingleUser key={user.id} user={user}/> 
        ))}
      </div>
    );
  }
}


export default AllUsers;