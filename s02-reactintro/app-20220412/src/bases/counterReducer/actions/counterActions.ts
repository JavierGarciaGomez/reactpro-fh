import { CounterAction } from "../interfaces/interfaces";

export const shit = () => {};

export const doReset = (): CounterAction => ({ type: "reset" });

export const doIncrement = (value: number): CounterAction => ({ type: "increaseBy", payload: { value: value } });
