import React from 'react';
import { back } from '../../components/iconList';
import MiniCard from '../../components/miniCard';
import './SlideTwo.css';

const SlideTwo = () => {
  return (
    <div className="card-component-two">
      <div className="card-object-two">
        <p>Back End</p>
        <ul>
          {back.map((element, index) => {
            return (
              <li key={index}>
                <MiniCard card={element} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SlideTwo;
