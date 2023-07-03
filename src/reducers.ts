import { ActionTypes, IinitialState } from "./optionsContextTypes";

export default function scoreReducer(
  state: IinitialState,
  action: ActionTypes
) {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE_PLAYER_CHOICE":
      return {
        ...state,
        playerHand: payload,
      };
    default:
      return {
        ...state,
        results: {
          winner: "error",
          message: "We have an Error.",
        },
      };
  }
}
