import React from "react";
import styled from "styled-components";
export default function FishCards(props) {
  const StyledFishes = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 95%;
    margin: 10vh auto 0 auto;
    padding-top: 5vh;
    font-family: "Montserrat", sans-serif;
    row-gap: 2rem;
  `;

  const StyledFishCardContainer = styled.div`
    border: 0.2rem solid white;
    border-radius: 20px;
    width: 45%;
    display: flex;
    flex-direction: column;
    row-gap: 0.8rem;
    line-height: 1.5rem;
  `;
  const StyledFishImg = styled.img`
    height: 20vh;
    width: 20vw;
    object-fit: fill;
    margin: 0 auto;
  `;

  const StyledFishName = styled.h2`
    color: #31c6d4;
    text-align: center;
    font-size: 1.5rem;
  `;

  const StyledFishTextxContainer = styled.p`
    margin: 2rem;
    line-height: ;
  `;

  const StyledFishTexts = styled.p`
    color: white;
  `;

  const StyledNoResult = styled.p`
    color: white;
    margin: 0 auto;
    padding-top: 5vh;
    font-size: 1.5rem;
  `;

  const StyledSpan = styled.span`
    color: yellow;
  `;

  const { data, searchTerm } = props;
  return (
    <StyledFishes>
      {data
        .filter((item) => {
          if (item === "") {
            return item;
          } else if (
            item["Scientific Name"]
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          ) {
            return item;
          }
        })
        .map((fish) => (
          <StyledFishCardContainer key={fish["Scientific Name"]}>
            <StyledFishImg
              src={fish["Species Illustration Photo"]["src"]}
            ></StyledFishImg>
            <StyledFishName>{fish["Scientific Name"]}</StyledFishName>
            <StyledFishTextxContainer>
              <StyledFishTexts>{fish["Habitat Impacts"]}</StyledFishTexts>
              <StyledFishTexts>{fish["Population"]}</StyledFishTexts>
              <StyledFishTexts>Calories: {fish["Calories"]}</StyledFishTexts>
              <StyledFishTexts>{fish["Fishing Rate"]}</StyledFishTexts>
              <StyledFishTexts>{fish["Harvest Type"]}</StyledFishTexts>
              <StyledFishTexts>Last update: {fish.last_update}</StyledFishTexts>
            </StyledFishTextxContainer>
          </StyledFishCardContainer>
        ))}
      {data.length === 0 ||
      data.find((item) =>
        item["Scientific Name"].toLowerCase().includes(searchTerm.toLowerCase())
      ) === undefined ? (
        <StyledNoResult>
          No results found for <StyledSpan>{searchTerm}</StyledSpan>
        </StyledNoResult>
      ) : null}{" "}
    </StyledFishes>
  );
}
