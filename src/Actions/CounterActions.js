export const CounterIncrement = (data) => (dispath) => {
  dispath({
    type: "increment",
    data: {incrementedBy: data}
  })
}

export const CounterDecrement = (data) => (dispath) => {
  dispath({
    type: "decrement",
    data: {decrementedBy: "Jogi"}
  })
}