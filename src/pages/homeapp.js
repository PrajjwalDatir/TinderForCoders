// 🎧 App will arrange all the sub-components of the project such as login-logout cards etc.
// 💃 Only import already Built components here.
// 🐲 Do not make small components here.
// 👔 All components must be created with their file name to avoid confusion.

import React from 'react'
import PeopleCards from "../components/peoplecards";
import "./main.css";

export default function HomeApp() {
  return (
    <div className="parentApp">
      <div>
        <h1>Tinder For Coders 🔥</h1>
        <h3>Not For 🐬 </h3>
      </div>
      <PeopleCards ></PeopleCards>
    </div>
  );
}
