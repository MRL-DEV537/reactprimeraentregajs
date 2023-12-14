import React from 'react';

const CartWidget = ({ itemCount }) => {
  return (
    <div className="cart-widget position-relative">
    <i className="bi bi-basket3"></i>
      {itemCount > 0 && (
        <span className="notification-bubble">{itemCount}</span>
      )}
    </div>
  );
};

export default CartWidget;
