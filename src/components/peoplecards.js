import React, { useState } from 'react';
import { cardsData } from "./cardsdata";
import "./main.css";
// {
// firstName: 'prajjwal',
// lastName: 'datir',
// age: 20,
// country: 'india',
// profilePhoto: './images/prajjwal_000.jpg',
// }
function PeopleCards() {
  const data = cardsData;
  return (
    <>
      <h1>This is my 🍏 app</h1>
      <table>
        <tr>
          <th>
            firstName
          </th>
          <th>
            lastname
          </th>
          <th>
            age
          </th>

        </tr>
        <tr>
          <th>
            {data[0].firstName}
          </th>
          <th>
            {data[0].lastname}
          </th>
          <th>
            {data[0].age}
          </th>

        </tr>
        <tr>
          <th>
            {data[1].firstName}
          </th>
          <th>
            {data[1].lastname}
          </th>
          <th>
            {data[1].age}
          </th>

        </tr>

      </table>
    </>
  )
}


export default PeopleCards

