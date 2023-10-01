// import React from "react";
// import { useSelector } from "react-redux";

function CakeContainer() {
  // useSelector :
  // 1.accepts a function as its parameter : selector funcition
  //   const state = useSelector((state) => state);
  //   console.log(state);
  return (
    <div>
      <h2>Cake number :10</h2>
      <button>buy cake</button>
    </div>
  );
}

export default CakeContainer;

// 1.how to dispatch action
// 2.how to access to redux store
