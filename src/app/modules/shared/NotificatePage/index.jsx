import React from 'react';
import './style.scss';

export const NotificatePage = (props) => {
  return (
    <div className='notificate-container1'>
      { props.children }
      <p>
        <button>Go to carts</button>
      </p>
    </div>
  )
};