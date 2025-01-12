import React from 'react';
import './button.css';

const Button = ({Text}) => {
  return(
    <div>
      <button className='login-btn' type='submit'>
        {Text}
      </button>
    </div>
  )
}
export default Button;