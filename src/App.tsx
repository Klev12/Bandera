import React from 'react';
import './Flag.css';
import { click } from '@testing-library/user-event/dist/click';

function Flag() {
  return (
      <div className="stripe yellow">
      <div className="stripe blue">
      <div className="stripe red"></div>
      </div>
      </div>
  );
}
export default Flag;

