import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../features/cake/cakeSlice";

function CakeContainer() {
  const [value, setValue] = useState(1);

  const state = useSelector((state) => state.cake); //=>{numOfCakes : 10}

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
    </div>
  );
}

export default CakeContainer;
