import React from 'react';

import  './inputfield.css';

const InputField =({label, id, type, placeholder}) =>{
  return(
    <div className='input-info'>
      <label htmlFor={id}>
        {label}
      </label>
      <input type={type} id={id} placeholder={placeholder} required/>

    </div>
  )
} 
export default InputField;