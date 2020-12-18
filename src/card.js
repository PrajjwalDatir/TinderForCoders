import React, { useState } from 'react';
import { cardsData } from "./cards";
import "./card.css";
function Card(props) {
  // console.log(props);
  let element = props.element;
  return (
    <section className='infoCard'>
      <h3 className="infoCardChild">Name: {element.firstName} {element.lastName}</h3>
      <img src={element.profilePhoto} alt={'Profile Photo 📽 '} style={{width: '100px'}}></img>
      <h3 className="infoCardChild">Country : {element.country}</h3>
      <h3 className="infoCardChild">Age: {element.age}</h3>
      <button className='cardBtn' id='cardBtnStar'> 🌟 Star </button>
      <button className='cardBtn' id='cardBtnFork'> 🍴 Fork </button>
      <button className='cardBtn' id='cardBtnNext'> ↪  Next</button>
    </section>
  );
}

export default function Cards() {
  // for (let index = 0; index < cardsData.length; index++) {
  // const element = cardsData[index];
  const [index, setIndex] = useState(0);
  return (
    <div className='Cards'>
      <Card element={cardsData[index]} />
      {/* <Card element={cardsData[1]} /> */}
      {/* <Card element={cardsData[2]} /> */}
      {/* <Card element={cardsData[3]} /> */}
      {/* <Card element={cardsData[4]} /> */}

    </div>
  );
}

