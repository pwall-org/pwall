import "./App.css";
import { coinList } from "./coinList";
import SearchBar from "./SearchBar";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coinList.filter((coin) =>
    coin.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1 id="title">pwall.org</h1>
      <h2 id="titleLabel">
        a lightweight, open-source, universal paper wallet generator
      </h2>
      <SearchBar handleSearch={handleSearch} />
      <ol>
        {filteredCoins.map((coin, index) => (
          <li key={index}>{coin}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
