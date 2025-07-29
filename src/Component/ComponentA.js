import React, { useState } from "react";

const ComponentA = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>ComponentA</div>
      <h2>Count: {count}</h2>
      <button>Increement</button>
      <button>Decreement</button>
    </>
  );
};

export default ComponentA;
