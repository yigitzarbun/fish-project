import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./components/Header";
import FishCards from "./components/FishCards";

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://www.fishwatch.gov/api/species")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, [searchTerm]);

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}></Header>
      <FishCards data={data} searchTerm={searchTerm}></FishCards>
    </>
  );
}

export default App;
