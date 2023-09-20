import React, { useState, useEffect } from "react";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import { useGeceModuAc } from "../hooks/useGeceModuAc";
import useAxios from "../hooks/useAxios";

const App = () => {
  // const [coinData, setCoinData] = useState([]);
  // const [geceModu, setGeceModu] = useState(false);
  const [geceModu, savedTheme, toggleMode] = useGeceModuAc();
  const [coinData, getCoins, coinsLoading, coinsErr] = useAxios(
    "get",
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
  );
  useEffect(() => {
    getCoins();
  }, []);
  return (
    <div className={geceModu ? "dark-mode App" : "App"}>
      <Navbar
        savedTheme={savedTheme}
        geceModu={geceModu}
        toggleMode={toggleMode}
      />
      <Charts coinData={coinData} />
    </div>
  );
};

export default App;
