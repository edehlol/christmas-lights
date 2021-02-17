import React from 'react';

export const Light = ({ light }) => {
  const { opacity, color } = light;
  return (
    <div
      className="light"
      style={{
        backgroundColor: `rgba(${color},${opacity / 100})`,
        boxShadow: `0 0 3em rgba(${color}, ${(opacity / 100) * 0.8})`,
      }}
    ></div>
  );
};
