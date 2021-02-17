import React, { useState } from 'react';
import { Lights } from './Lights';
import { LightsController } from './LightsController';

function App() {
  const [isActive, setIsActive] = useState(false);
  const [speed, setSpeed] = useState(80);

  const onActiveBtnClick = () => {
    setIsActive(!isActive);
  };
  const changeSpeed = (value) => {
    setSpeed(value);
  };
  return (
    <div className="App">
      <Lights isActive={isActive} speed={speed} />
      <LightsController
        changeSpeed={changeSpeed}
        speed={speed}
        onActiveBtnClick={onActiveBtnClick}
      />
    </div>
  );
}

export default App;
