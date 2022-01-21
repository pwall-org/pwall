import "./App.css";
import { coinList } from "./coinList";
import SearchBar from "./SearchBar";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  // const [coinFilter, setCoinFilter] = useState(searchTerm);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <h1 id="title">pwall.org</h1>
      <h2 id="titleLabel">
        a lightweight, open-source, universal paper wallet generator
      </h2>
      <SearchBar coins={coinList} handleSearch={handleSearch} />
      {!searchTerm ? (
        <ol>
          {coinList.map((coin, index) => (
            <li key={index}>{coin}</li>
          ))}
        </ol>
      ) : (
        coinList.filter((coin) => coin.toLowerCase().includes(searchTerm))
      )}
    </div>
  );
}

export default App;
