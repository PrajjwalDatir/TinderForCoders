import React from 'react'
import { cardsData } from "./cards";
import "./card.css";
function Card(props) {
  // console.log(props);
  let element = props.element;
  return (
    <section className='infoCard'>
      <h2 className="infoCardChild">Name: {element.firstName} {element.lastName}</h2>
      <img src={element.profilePhoto} style={{width: '100px'}}></img>
      <h2 className="infoCardChild">Country : {element.country}</h2>
      <h2 className="infoCardChild">Age: {element.age}</h2>
    </section>
  );
}

export default function Cards() {
  // for (let index = 0; index < cardsData.length; index++) {
  // const element = cardsData[index];
  return (
    <div className='Cards'>
      <Card element={cardsData[0]} />
      <Card element={cardsData[1]} />
      <Card element={cardsData[2]} />
      <Card element={cardsData[3]} />
      <Card element={cardsData[4]} />

    </div>
  );
}

