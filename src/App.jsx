import ResetButton from "./Components/ResetButton/ResetButton"
import './App.scss';
import InputBox from "./Components/InputBox/InputBox"
import CardContainer from "./Containers/CardContainer/CardContainer"

function App() {
  return (
    <div className="App">
      <nav>
        <h1>My Todos</h1>
        <ResetButton />
      </nav>
      <main>
        <InputBox />
        <CardContainer />
      </main>
    </div>
  );
}

export default App;
