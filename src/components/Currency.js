import React, { useContext } from 'react';

import { AppContext } from '../context/AppContext';
import { FaCaretDown } from "react-icons/fa";

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
    <div className='alert alert-secondary' style={{ backgroundColor: 'lightgreen', color: 'white', border: 'none', fontFamily: 'bold' }}>
  Currency (
  <div style={{ position: 'relative', display: 'inline-block' }}>
    <select
      name="Currency"
      id="Currency"
      style={{
        backgroundColor: 'lightgreen',
        color: 'white',
        border: 'none',
        fontFamily: 'bold',
        appearance: 'none', /* This hides the default dropdown arrow */
      }}
      onChange={event => changeCurrency(event.target.value)}
    >
      <option value="$" style={{ color: 'black' }}>$ Dollar</option>
      <option value="£" style={{ color: 'black' }}>£ Pound</option>
      <option value="€" style={{ color: 'black' }}>€ Euro</option>
      <option value="₹" style={{ color: 'black' }}>₹ Rupees</option>
    </select>
    
  </div>
  ) 
  <FaCaretDown
    style={{
      position: 'relative',
      marginLeft: '5px', /* Adjust the margin as needed */
      verticalAlign: 'middle',
    }}
  />

</div>
    );
};

export default Currency;