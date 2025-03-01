import React from 'react';
import './slider.css';

function Toggle({ checked, onChange }) {
  return (
    <>
    <div id='toggle'>
      <label className="switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span className="slider round"></span>
      </label>
      </div>
    </>
  );
}

export default Toggle;