export const CounterIncrement = (data) => (dispath) => {
  console.log(data);
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