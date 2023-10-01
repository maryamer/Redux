import { createStor } from "react-redux";
import cakeReducer from "./cake/cakeReducer";

const store = createStor(cakeReducer);
export default store;
