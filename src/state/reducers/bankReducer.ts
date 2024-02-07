const initialState = 0;

// type Action = {
//   type: string,
//   payload?: number
// }

interface DepositAction {
  type: "deposit"
  payload: number
}

interface WithdrawAction {
  type: "withdraw"
  payload: number
}

interface BankruptAction {
  type: "bankrupt"
}

type Action = DepositAction | WithdrawAction | BankruptAction

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "deposit":
      return state + action.payload
    case "withdraw":
      return state - action.payload
    case "bankrupt":
      return 0
    default:
      return state;
  }
}