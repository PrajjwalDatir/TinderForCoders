import React, { useState } from 'react';
import { cardsData } from "./cardsdata";
import "../style/main.scss";
// {
// firstName: 'prajjwal',
// lastName: 'datir',
// age: 20,
// country: 'india',
// profilePhoto: './images/prajjwal_000.jpg',
// }

function PeopleCards() {
  const data = cardsData;
  const [person, setPerson] = useState({
    firstName: 'firstName',
    lastName: 'lastName',
    age: 0,
    country: 'earth',
    profilePhoto: './images/defaultimage.jpg',
    })
  return (
    <>
      {/* <h1>This is my 🍏 app</h1> */}
      <h1>{person.firstName}</h1>
      <h1>{person.lastName}</h1>
      <h1>{person.age}</h1>
      <h1>{person.country}</h1>
      <img src={person.profilePhoto} width="200px" height="200px" alt={person.firstName}></img>
      <button className="btn">NEXT</button>
    </>
  )
}


export default PeopleCards

