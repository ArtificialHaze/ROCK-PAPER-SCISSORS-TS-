import "./App.css";
import ChooseAndPlay from "./ChooseAndPlay";
import ScoreAndResults from "./ScoreAndResults";

const App = () => {
  return (
    <>
      <div className={"container"}>
        <div className={"titleCtn"}>
          <h1>ROCK, PAPER, SCISSORS</h1>
          <p>EASTY AND FUN GAME, HAVE FUN.</p>
        </div>
        <ScoreAndResults />
        <ChooseAndPlay />
      </div>
    </>
  );
};

export default App;
