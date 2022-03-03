import React from 'react';
import { LinearProgress } from '@material-ui/core';

export const TopBarLoader = () => {
  return (
    <>
      <LinearProgress color="primary" />
      <LinearProgress color="primary" />
    </>
  );
};
