import React, { useState } from "react";
import plus from "./icons/plus-solid-1.svg";
import folder from "./icons/folder-open-solid.svg";
import house from "./icons/house-solid.svg";
import pen from "./icons/pen-to-square-solid.svg";
import Home from "./components/Home";
import Add from "./components/Add";
function App() {
  const [openingFunc, setOpeningFunc] = useState("home");
  const [formData, setFormData] = useState({
    projectName: "",
    word: "",
    answer: "",
  });
  const handleUI = () => {
    if (openingFunc === "home") {
      return <Home handleButton={handleButton} />;
    } else if (openingFunc === "plus") {
      return <Add />;
    }
  };
  console.log(openingFunc);
  const handleButton = (event) => {
    setOpeningFunc(event.target.name);
  };
  return <React.Fragment>{handleUI()}</React.Fragment>;
}

export default App;
