import React, {Fragment} from 'react';

import classes from './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'}
];

const buildControls = props => (
  <Fragment>
    <div className={classes.BuildControls}>
      <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          type={ctrl.type}
          added={() => props.ingredientAdded(ctrl.type)}
          deleted={() => props.ingredientDeleted(ctrl.type)}
          disabled={props.disabled[ctrl.type]}/>
      ))}
    </div>
  </Fragment>
);

export default buildControls;