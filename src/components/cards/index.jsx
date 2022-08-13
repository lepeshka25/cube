import React from 'react';
import './style.module.scss'

const Cards = () => {
  return (
    <div className='wrap'>
      <div className="card-shadow"></div>
      <div className="card-front">
        <div className="card-title"></div>
        <div className="card-subtitle"></div>
        <div className="card-shine"></div>
      </div>
    </div>
  );
};

export default Cards;