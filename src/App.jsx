import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Search_bar from "./search_bar";
import { FaBook } from "react-icons/fa6";

function App() {
  const body = document.body;
  function toggleTheme() {
        if (body.getAttribute('data-theme')=="light") {
          body.setAttribute("data-theme", "dark");
          body.style.backgroundColor = "black";
          body.style.color = "white";
        } else {
          body.setAttribute("data-theme", "light");
          body.style.backgroundColor = "white";
          body.style.color = "black";
        }
        console.log(body.getAttribute('data-theme'));
  };

  return (
    <>
      <h1>
        <FaBook id="bookIcon" onClick={toggleTheme} /> Welcome to the Dictionary
        !
      </h1>
      <Search_bar />
    </>
  );
}
export default App;
