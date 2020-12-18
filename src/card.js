import React from 'react'
import { Cards } from "./cards";
import "./card.css";
export default function Card() {
  for (let index = 0; index < Cards.length; index++) {
    const element = Cards[index];
    return (
      <div className='infoCard'>
        <h1 className="infoCardChild">First Name: {element.firstName}</h1>
        <h1 className="infoCardChild">Last Name: {element.lastName}</h1>
        <h1 className="infoCardChild">Country : {element.country}</h1>
        <h1 className="infoCardChild">Age: {element.age}</h1>
      </div>
    );
  }
}
