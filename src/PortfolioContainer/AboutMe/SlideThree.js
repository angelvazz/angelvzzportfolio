import React from 'react';
import { db, cloud } from '../../components/iconList';
import MiniCard from '../../components/miniCard';
import './SlideThree.css';

const SlideThree = () => {
  return (
    <div className="card-component">
      <div className="card-object-two">
        <p>Data Base</p>
        <ul>
          {db.map((element, index) => {
            return (
              <li key={index}>
                <MiniCard card={element} />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="card-object-two">
        <p>Cloud</p>
        <ul>
          {cloud.map((element, index) => {
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

export default SlideThree;
