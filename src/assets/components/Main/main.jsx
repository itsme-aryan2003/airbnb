import React from 'react';
import Icons from './Icons/icons';
import './main.css';
import UnderConstruction from './underConstruction';

export default function Main({render,data }) {
  return (
    <div className="main">
      {render === 1 ? <Icons /> : <UnderConstruction data = {data}/>}
    </div>
  );
}
