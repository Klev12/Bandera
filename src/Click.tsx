import React, { MouseEvent } from 'react';

function Cli() {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    alert('Propagation stopped!');
  };

  return (
    <div onClick={() => alert('This message will not be displayed')}>
      <button onClick={handleClick}>Click here </button>
    </div>
  );
}

export default Cli;
