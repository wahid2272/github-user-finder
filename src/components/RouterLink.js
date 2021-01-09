import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Home from './pages/Home';

export default function ButtonRouter() {
  return (
    <Router>
      <div>
        <Button color="primary" component={Home} to="/">
          Home
        </Button>
      </div>
    </Router>
  );
}