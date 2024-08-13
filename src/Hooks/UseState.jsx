import React, { useState } from "react";
import styled from "styled-components";

function UseState() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const dencrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <Container>
        <h2>UseState</h2>
        <button onClick={increment}>+ Increment</button>
        <h3>{counter}</h3>
        <button onClick={dencrement}>- Decrement</button>
      </Container>
    </>
  );
}

const Container = styled.div`
  text-align: center;
  margin-top: 100px;
`;

export default UseState;
