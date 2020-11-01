import React from 'react';
import styled, { css } from 'styled-components'


const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: hotpink;
  color: white;
  text-align: center;
  border: 2px solid pink;
  cursor: pointer;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: white;
    color: black;
  `}
`


function App() {
  return (
    <div className="App">
      <Button>Test</Button>
    </div>
  );
}

export default App;
