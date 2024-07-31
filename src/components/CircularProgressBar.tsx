import React from 'react';

interface CircularProgressBarProps {
  progress: number; // The percentage of the progress
  size: number; // The width and height of the SVG
  strokeWidth: number; // The width of the stroke
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ progress, size, strokeWidth }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="relative">
      <circle cx={size / 2} cy={size / 2} r={radius} stroke="#e6e6e6" strokeWidth={strokeWidth} fill="none"/>
      <circle cx={size / 2} cy={size / 2} r={radius} stroke="#00FF00" strokeWidth={strokeWidth} fill="none" strokeDasharray={circumference} strokeDashoffset={offset} style={{ transition: 'stroke-dashoffset 0.35s ease' }}/>
    </svg>
  );
};

export default CircularProgressBar;
