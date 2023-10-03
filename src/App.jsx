import React from "react";
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import MilkContainer from "./components/MilkContainer";
import UsersList from "./components/UsersList";
import store from "./features/store";

function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
      <MilkContainer />
      <hr />
      <UsersList />
    </Provider>
  );
}

export default App;
