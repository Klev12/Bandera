import React, { useState } from 'react';
import './Flag.css';

const Flag: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  const handleClick = (colorName: string) => {
    setMessage(`Color: ${colorName}, Ecuador!`);
  };

  return (
    <div>
      <div className="stripe yellow" onClick={() => handleClick('Yellow')}>
        <div className="stripe blue" onClick={() => handleClick('Blue')}>
          <div className="stripe red" onClick={() => handleClick('Red')}></div>
        </div>
      </div>
      <div>{message}</div>
    </div>
  );
}

export default Flag;
