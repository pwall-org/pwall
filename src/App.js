import "./App.css";
import { coinList } from "./coinList";

function App() {
  return (
    <div className="App">
      <h1 id="title">pwall.org</h1>
      <h2 id="titleLabel">
        a lightweight, open-source, universal paper wallet generator
      </h2>
      <input type="text" placeholder="Search for your cryptocurrency..." />
      <ol>
        {coinList.map((coin, index) => (
          <li key={index}>{coin}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
