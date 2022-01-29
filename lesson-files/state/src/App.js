import Clock from "./components/Clock";
import Counter from "./components/Counter";
import CounterV2 from "./components/CounterV2";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className="App">
      <Clock />
      <hr/>
      <Counter />
      <hr/>
      <CounterV2 count={3} />
      <hr/>
      <Buttons />
    </div>
  );
}

export default App;
