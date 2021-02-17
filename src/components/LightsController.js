import React from 'react';

export const LightsController = ({ changeSpeed, speed, onActiveBtnClick }) => {
  const onChangeSlider = (e) => {
    changeSpeed(e.target.value);
  };
  return (
    <div>
      <form className="lights-controller-container" onClick={(e) => e.preventDefault()}>
        <label>Speed: </label>
        <input type="range" min={10} max={100} value={speed} onChange={onChangeSlider} />
        <button onClick={onActiveBtnClick}>Start / Stop</button>
      </form>
    </div>
  );
};
