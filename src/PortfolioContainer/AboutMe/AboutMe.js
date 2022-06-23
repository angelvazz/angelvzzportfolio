import React from 'react';
import AboutSlider from '../../components/AboutSlider';
import './AboutMe.css';

export default function AboutMe({ technologies }) {
  return (
    <div className="container-technologies" ref={technologies}>
      <h1 className="title-technologies">Technologies</h1>
      <AboutSlider />
    </div>
  );
}
