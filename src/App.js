import Calculator from "./components/Calculator";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.container}>
      <h1>React Calculator</h1>

      <Calculator></Calculator>
    </div>
  );
}

export default App;
