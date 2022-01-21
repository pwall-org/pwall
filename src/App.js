import "./App.css";
import { coinList } from "./coinList";

function App() {
  return (
    <div className="App">
      <div id="title">pwall.org</div>
      <div id="titleLabel">
        a lightweight, open-source, universal paper wallet generator
      </div>
      <input
        type="text"
        placeholder="Search for your cryptocurrency..."
      ></input>
      <ol>
        {coinList.map((coin) => {
          <li>{coin}</li>;
        })}
      </ol>
    </div>
  );
}

export default App;
