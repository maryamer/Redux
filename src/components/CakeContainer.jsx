import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function CakeContainer() {
  const [value, setValue] = useState(1);
  // useSelector :
  // 1.accepts a function as its parameter : selector funcition
  //  2.returns the value returned by selector functipn
  const state = useSelector((state) => state); //=>{numOfCakes : 10}

  // returns a reference to the dispatch function in redux store
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="numbe "
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <h2>Cake number :{state.numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake(value))}>buy cake</button>
      {/* <button onClick={() => dispatch({ type: "BUY_CAKE" })}>buy cake</button>
      <button onClick={() => dispatch({ type: "BUY_CAKE", payload: 2 })}>
        buy two cake
      </button> */}
    </div>
  );
}

export default CakeContainer;

// 1.how to dispatch action
// 2.how to access to redux store
