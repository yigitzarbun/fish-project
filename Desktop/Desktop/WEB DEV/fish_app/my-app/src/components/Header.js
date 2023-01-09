import React from "react";
import styled from "styled-components";
export default function (props) {
  const { searchTerm, setSearchTerm } = props;
  const StyledHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 2vh;
    justify-content: space-between;
    width: 95%;
    margin: 1rem auto;
    font-family: "Montserrat", sans-serif;
    position: fixed;
    margin-top: -65px;
    padding-top: 3vh;
    padding-bottom: 3vh;
    width: 100%;
    overflow: hidden;
    background-color: black;
  `;
  const StyledSearchBar = styled.input`
    height: 4vh;
    background-color: #404258;
    border: none;
    border-radius: 20px;
    color: white;
    width: 15%;
    margin-right: 5vh;
  `;

  const StyledLogo = styled.a`
    text-decoration: none;
    color: #31c6d4;
    font-size: 2.5rem;
    margin-left: 5vh;
  `;
  return (
    <StyledHeaderContainer>
      <StyledLogo href="index.html">
        {" "}
        <h1>FishWatch</h1>
      </StyledLogo>
      <StyledSearchBar
        type="text"
        placeholder="Search by Name"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        value={searchTerm}
        autoFocus
      ></StyledSearchBar>
    </StyledHeaderContainer>
  );
}
