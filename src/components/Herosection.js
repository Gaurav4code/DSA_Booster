import React from "react";
import styled from "styled-components";

import Card from "../components/Card.js";
import { Routes, Route, useNavigate } from "react-router-dom";

const Herosection = () => {
  return (
    <>
      <Header>
        <h1> 450 Question to boost your DSA </h1>
      </Header>
      <Container>
        <Card Head="Array" link="/ar" />
        <Card Head="Matrix" link="/matrix" />
        <Card Head="String" link="string" />
        <Card Head="Search-Sort" link="search_sort" />
        <Card Head="Linked List" link="linked_list" />
        <Card Head="Binary Trees" link="binary_trees" />
        <Card Head="BST" link="bst" />
        <Card Head="Greedy" link="greedy" />
        <Card Head="BackTracking" link="back_tracking" />
        <Card Head="Stack & Queues" link="stack_queues" />
        <Card Head="Heap" link="heap" />
        <Card Head="Graph" link="graph" />
        <Card Head="Tries" link="tries" />
        <Card Head="Dynamic Programming" link="dp" />
        <Card Head="Bit Manipulation" link="bit_manipulation" />
      </Container>
    </>
  );
};

export default Herosection;

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
  height: 1200px;
  margin: 50px 60px;
  background-color: #4318ff;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
`;
