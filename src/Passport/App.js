import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import NoPage from "./component/NoPage";
import FreshPassportForm from "./component/FreshPassportForm";
import ReissuePassportForm from "./component/ReissuePassportForm";
import PaymentPage from "./component/PaymentPage";
import ThankYou from "./component/ThankYou";
import styled from "styled-components";

const AppContainer = styled.div`
  background-color: #0d1b2a;
  min-height: 100vh;
  color: #e0e1dd;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<FreshPassportForm />} />
          <Route path="/freshpassport" element={<FreshPassportForm />} />
          <Route path="/reissuepassport" element={<ReissuePassportForm />} />
          <Route path="/PaymentPage" element={<PaymentPage />} />
          <Route path="/ThankYou" element={<ThankYou />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
      <Footer />
    </AppContainer>
  );
}

export default App;
