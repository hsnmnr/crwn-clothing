import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selector";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">TOTAL: ${total}</div>

    <div className="test-warning">
      <br />
      *Use Following Credit Card For Test Payments*
      <br />
      4242 4242 4242 4242 - EXP: Any Future Date - CVV: 123
      <br />
      <br />
    </div>

    <StripeCheckoutButton price={total} />
  </div>
);

const mapStatesToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStatesToProps)(CheckoutPage);
