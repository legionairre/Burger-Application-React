import React, {Fragment, Component} from 'react';

import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  // This could be be a functional component, doesn't have to be a class based component.
  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('orderSummary will update')
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map((igKey, index) => {
        return <li key={igKey + index}><span
          style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]} </li>
      });
    return (
      <Fragment>
        <h3>Your order</h3>
        <p>A delicious burger with following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: ${this.props.price.toFixed(2)} </strong></p>
        <p>Continue to Checkout?</p>
        <Button clicked={this.props.purchaseCanceled} btnType='Danger'>CANCEL</Button>
        <Button clicked={this.props.purchaseContinued} btnType='Success'>CONTINUE</Button>
      </Fragment>
    );
  }
}

export default OrderSummary;