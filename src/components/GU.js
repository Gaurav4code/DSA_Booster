import React from "react";
import styled from "styled-components";
import { Routes, Route, useNavigate } from "react-router-dom";
import Questions from "../components/Questions";
import record from "../components/Record.json";
import { motion } from "framer-motion";
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

        <List>
          {record &&
            record.map((record) => {
              return (
                <div className="kk" key={record.id}>
                  <h4>{record.title}</h4>
                  {/* <Button onClink={navigateToQuestion(record.link)}>s</Button> */}

                  <Button
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "yellow"
                    }}
                    onClick={() => window.open(record.link)}
                  >
                    Solve
                  </Button>
                </div>
              );
            })}
        </List>
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
    justify-content: space-between;
    align-items: center;
    padding: 4px 6px 4px 16px;
    gap: 12px;

    margin-top: 30px;
    width: 600px;
    height: 56px;
    color: white;
    h4 {
      font-family: "DM Sans";
    }

    /* Palette/Transparent Black/30 */

    background: #2b06cb;
    border-radius: 100px;
  }
`;

const List = styled.div`
  box-sizing: border-box;
  padding: 20px 50px;
  position: absolute;
  width: 700px;
  height: 350px;
  margin: 0px 400px;
  background: linear-gradient(
    108.39deg,
    rgba(217, 217, 217, 0.4) 4.31%,
    rgba(217, 217, 217, 0.1) 80%
  );
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 40px;
`;
const Button = styled(motion.button)`
  border: none;
  width: 81px;
  height: 33px;
  left: 570px;
  top: 583px;

  background: #34d399;
  border-radius: 17px;
  font-family: "DM Sans";
  font-weight: 900;
`;

const col = styled.div`
  border: red 1px solid;
`;
