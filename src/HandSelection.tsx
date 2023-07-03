import React, { useState } from "react";
import { OptionsAction } from "./optionsContextTypes";
import { useOptions } from "./optionsContext";

interface Props {
  name: string;
  icon: JSX.Element;
  handChoiceIndex: number;
}

const HandSelection: React.FC<Props> = ({ name, icon, handChoiceIndex }) => {
  const [handPressed, setHandPressed] = useState<boolean>(false);

  const { dispatch, state } = useOptions();

  const selectedHandIndex = state.playerHand;

  const selectOption = (index: number) => {
    dispatch({ type: OptionsAction.UPDATE_PLAYER_CHOICE, payload: index });
    setHandPressed(true);
  };

  return (
    <>
      <button
        className={` ${
          handPressed && handChoiceIndex === selectedHandIndex
            ? "activeChoice"
            : ""
        } choiceBtn`}
        onClick={() => selectOption(handChoiceIndex)}
      >
        {name} {icon}
      </button>
    </>
  );
};

export default HandSelection;
