import { INITIAL_STATE } from "../CounterRefactor";
import { CounterAction, CounterState } from "../interfaces/interfaces";

export const counterReducer = (state: CounterState = INITIAL_STATE, action: CounterAction): CounterState => {
  console.log(state);
  switch (action.type) {
    case "increaseBy":
      return {
        changes: state.changes + 1,
        counter: state.counter + action.payload.value,
        previous: state.counter,
      };

    case "reset":
      return { counter: 0, previous: 0, changes: 0 };

    default:
      return state;
  }
};
