import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./container/HomePage/Home";
import ShowCoin from "./container/CoinsDetails/ShowCoins/ShowCoin";
import Navbar from "./container/Navbar/Navbar";
import CoinDetailsPage from "./container/CoinsDetails/CoinDetailProper/CoinDetailsPage";
import Change from "./container/Change/Change";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/coins" element={<ShowCoin />} />
        <Route exact path="/coins/:id" element={<CoinDetailsPage />} />
        <Route exact path="/change" element={<Change />} />
      </Routes>
    </Router>
  );
}

export default App;
