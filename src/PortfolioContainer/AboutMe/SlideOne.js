import React from 'react';
import './SlideOne.css';
import { front } from '../../components/iconList';
import MiniCard from '../../components/miniCard';

const SlideOne = () => {
  return (
    <div className="card-component">
      <div className="card-object-two">
        <p>Front End</p>
        <ul>
          {front.map((element, index) => {
            return (
              <li key={index}>
                {' '}
                <MiniCard card={element} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SlideOne;
