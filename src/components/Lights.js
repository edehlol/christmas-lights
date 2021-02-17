import React, { useState, useEffect } from 'react';
import { Light } from './Light';

const COLORS = [
  { red: '255, 4, 39' },
  { blue: '0,91,207' },
  { green: '39,168,63' },
  { yellow: '255,214,17' },
];
const [{ red }, { blue }, { green }, { yellow }] = COLORS;

const lightsArr = [
  {
    id: 1,
    color: red,
    opacity: 0,
    brightening: true,
  },
  {
    id: 2,
    color: blue,
    opacity: 100,
    brightening: false,
  },
  {
    id: 3,
    color: green,
    opacity: 0,
    brightening: true,
  },
  {
    id: 4,
    color: yellow,
    opacity: 100,
    brightening: false,
  },
  {
    id: 5,
    color: red,
    opacity: 0,
    brightening: true,
  },
  {
    id: 6,
    color: blue,
    opacity: 100,
    brightening: false,
  },
  {
    id: 7,
    color: green,
    opacity: 0,
    brightening: true,
  },
];

export const Lights = ({ isActive, speed }) => {
  const [lightsRow, setLightsRow] = useState(lightsArr);

  const setBrightening = ({ opacity, brightening }) => {
    if (opacity === 0) {
      return true;
    } else if (opacity === 100) {
      return false;
    } else return brightening;
  };

  const setOpacity = ({ opacity, brightening }) => {
    if (brightening) {
      return opacity + 10;
    } else {
      return opacity - 10;
    }
  };

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setLightsRow((row) =>
          row.map((light) => ({
            ...light,
            brightening: setBrightening(light),
            opacity: setOpacity(light),
          }))
        );
      }, speed);
      return () => clearInterval(interval);
    }
  }, [isActive, speed]);

  const renderLights = () => {
    return lightsRow.map((light) => {
      return (
        <React.Fragment key={light.id}>
          <Light light={light} isActive={isActive} />
        </React.Fragment>
      );
    });
  };

  return <div className="lights-container">{renderLights()}</div>;
};
