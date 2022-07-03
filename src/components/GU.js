import React from "react";
import styled from "styled-components";
import { Routes, Route, useNavigate } from "react-router-dom";
import Questions from "../components/Questions";
import record from "../components/Record.json";

const Gu = (props) => {
  const navigate = useNavigate();

  const navigateToQuestion = (dp) => {
    // 👇️ navigate to /array-questions
    navigate(dp.link);
  };

  return (
    <>
      <Container>
        <h1>Question {props.pop}</h1>
        <h1>dsasac</h1>

        <a href="https://practice.geeksforgeeks.org/problems/reverse-an-array/0">
          Reverse an array
        </a>

        {record &&
          record.map((record) => {
            return (
              <div className="kk" key={record.id}>
                <a>{record.title}</a>
                <Button onClink={navigateToQuestion(record.link)}>s</Button>
                <Button>
                  <a href={record.title}>Solve</a>
                </Button>
              </div>
            );
          })}
      </Container>
    </>
  );
};

export default Gu;

const Container = styled.div`
  height: 2000px;
  width: 350px;
  border: none;
  padding: 10px 10px;

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
  .kk {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 6px 4px 16px;
    gap: 12px;

    margin-top: 30px;
    width: 388px;
    height: 56px;

    /* Palette/Transparent Black/30 */

    background: #2b06cb;
    border-radius: 100px;
  }
`;

const Button = styled.button`
  border: none;
  width: 81px;
  height: 33px;
  left: 570px;
  top: 583px;

  background: #34d399;
  border-radius: 17px;
`;

const col = styled.div`
  border: red 1px solid;
`;
