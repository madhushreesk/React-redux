import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>Add</button>
      <button onClick={() => dispatch(decrement())}>Substract</button>
      {isLogged ? <h3>Valuable Information I shouldnt see</h3> : ""}
    </div>
  );
};

export default App;
