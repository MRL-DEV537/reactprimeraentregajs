import React from 'react';

const CartWidget = ({ itemCount }) => {
  return (
    <div className="cart-widget position-relative">
      {itemCount > 0 && (
        <span className="notification-bubble">{itemCount}</span>
      )}
    </div>
  );
};

export default CartWidget;
