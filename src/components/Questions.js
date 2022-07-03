import Card from "../components/Card.js";
import { Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
const Questions = () => {
  return (
    <>
      <Container>Questions</Container>
    </>
  );
};

export default Questions;

const Header = styled.div`
  display: block;
  border: solid red 2px;

  h1 {
    font-size: 100px;

    height: 52px;

    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;

    color: #ffffff;
  }
`;

const Container = styled.div`
 
  margin: 50px 60px;
  background-color: #4318ff;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
`;
