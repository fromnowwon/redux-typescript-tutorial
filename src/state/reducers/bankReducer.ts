import { ActionType } from "../action-types";
import { Action } from "../actions";

const initialState = 0;

// type Action = {
//   type: string,
//   payload?: number
// }

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.DEPOSIT:
      return state + action.payload
    case ActionType.WITHDRAW:
      return state - action.payload
    case ActionType.BANKRUPT:
      return 0
    default:
      return state;
  }
}

export default reducer