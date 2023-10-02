import { useDispatch, useSelector } from "react-redux";
import { buyMilk } from "../features/milk/milkSlice";

export default function MilkContainer() {
  const state = useSelector((state) => state.milk);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="text-center">Milk number : {state.numOfMilk}</h1>
      <button onClick={() => dispatch(buyMilk(1))}>Buy milk</button>
      <br />
    </div>
  );
}
