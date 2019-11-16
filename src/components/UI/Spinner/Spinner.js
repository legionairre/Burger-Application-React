import React, {Fragment} from 'react';

import classes from './Spinner.css'

const spinner = () => (
  <Fragment>
    <div className={classes.Loader}>Loading...</div>
  </Fragment>
);

export default spinner;