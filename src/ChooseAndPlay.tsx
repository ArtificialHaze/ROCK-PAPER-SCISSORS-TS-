import HandSelection from "./HandSelection";
import { useOptions } from "./optionsContext";

const ChooseAndPlay = () => {
  const { options } = useOptions();

  const HandOptionsArray = options.map((item, i) => {
    return (
      <HandSelection
        handChoiceIndex={i}
        key={i}
        name={item.name}
        icon={item.icon}
      />
    );
  });

  return (
    <>
      <div className="choiceBtnCtn">{HandOptionsArray}</div>
      <button className="playBtn">Play</button>
    </>
  );
};

export default ChooseAndPlay;
