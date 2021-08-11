import { COUNT_INCREMENT, COUNT_DECREMENT } from "../Constants/Constants";

export const CounterIncrement = (data) => (dispath) => {
  dispath({
    type: COUNT_INCREMENT,
    data: {incrementedBy: data}
  })
}

export const CounterDecrement = (data) => (dispath) => {
  dispath({
    type: COUNT_DECREMENT,
    data: {decrementedBy: "Jogi"}
  })
}