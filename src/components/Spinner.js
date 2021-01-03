import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <>
      <img src={spinner} alt="Loading..." style={{ width: '300px', margin: 'auto', display: 'block'}}/>
    </>
  );
};

export default Spinner;