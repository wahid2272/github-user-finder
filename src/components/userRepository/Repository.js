import React from 'react';
import RepositoryItem from './RepositoryItem';

const Repository = ({ repos }) => {
  return repos.map(repo => <RepositoryItem repo={repo} id={repo.id}/>)
};

export default Repository;