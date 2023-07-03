export enum HandOption {
  rock = "rock",
  paper = "paper",
  scissors = "scissors",
}

export interface Ioptions {
  name: HandOption;
  icon: JSX.Element;
}

export interface Iscore {
  player: number;
  computer: number;
}

export interface Iresults {
  winner: string;
  message: string;
}

export interface IinitialState {
  playerHand: number;
  computerHand: number;
  runTimer: boolean;
  score: Iscore;
  results: Iresults;
}

export interface IoptionsContext {
  options: Ioptions[];
  state: IinitialState;
  dispatch: React.Dispatch<ActionTypes>;
}

export enum OptionsAction {
  UPDATE_PLAYER_CHOICE = "UPDATE_PLAYER_CHOICE",
}

export interface UpdatePlayerChoice {
  type: OptionsAction.UPDATE_PLAYER_CHOICE;
  payload: number;
}

export type ActionTypes = UpdatePlayerChoice;

export interface Props {
  children: React.ReactNode;
}
