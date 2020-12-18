import React from 'react'
import { Cards } from "./cards";
import "./card.css";
export default function Card() {
  for (let index = 0; index < Cards.length; index++) {
    const element = Cards[index];
    return (
      <div>
        <h2>First Name: {element.firstName},</h2>
        <h2>Last Name: {element.lastName},</h2>
        <h2>Country : {element.country},</h2>
        <h2>Age: {element.age}</h2>
        <br></br>
      </div>
    );
  }
}
