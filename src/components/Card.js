import React from "react";
import styled from "styled-components";
import { Routes, Route, useNavigate } from "react-router-dom";
import Questions from "../components/Questions";
import Gu from "../components/GU";
const Card = (props) => {
  const navigate = useNavigate();

  const navigateToQuestion = () => {
    // 👇️ navigate to /array-questions
    navigate(props.link);
  };
  return (
    <>
      <Container>
        <Top>
          <h1>{props.Head}</h1>
          <Button onClick={navigateToQuestion}>Start Now</Button>
        </Top>
        <Routes>
          <Route path={props.link} element={<Gu />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
        <h5>Total number of questions</h5>
        <h2>36</h2>
      </Container>
    </>
  );
};

export default Card;

const Container = styled.div`
  height: 200px;
  width: 350px;
  border: none;
  padding: 10px 10px;

  background: linear-gradient(136.98deg, #1cd5f7 33.72%, #bfebf3 91.89%);
  box-shadow: 8px 6px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;

  font-family: "DM Sans";
  color: #ffffff;

  h1 {
    font-size: 100px;
    width: 207px;
    height: 52px;
    text-align: left;

    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;

    color: #ffffff;
  }
`;

const Button = styled.button`
  border: none;
  margin-top: 10px;
  font-family: "DM Sans";
  font-style: normal;

  font-size: 15px;
  line-height: 26px;
  font-weight: 700;
  color: blue;
  width: 102px;
  height: 36px;

  background: #86ff3c;
  border-radius: 20px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;
