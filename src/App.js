import "./styles.css";
import styled from "styled-components";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Questions } from "../src/components/Questions";
import Gu from "../src/components/GU";
import Herosection from "../src/components/Herosection";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Herosection />} />
        <Route path="/ar" element={<Gu pop="array" />} />
        <Route path="/linked_list" element={<Gu pop="Linked List" />} />
        <Route path="/matrix" element={<Gu pop="Matrx" />} />
        <Route path="/dp" element={<Gu pop="Dynamic Programming" />} />
        <Route path="/string" element={<Gu pop="String" />} />
        <Route path="/graph" element={<Gu pop="Graph" />} />
        <Route path="/ar" element={<Gu pop="Array" />} />
      </Routes>
    </div>
  );
}
