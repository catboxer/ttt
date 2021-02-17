import React from "react"
import styled from "styled-components"
import {setRadius, setColor} from '../../themes/styles'
const Counter = () => {
  const [count, setCount] = React.useState(0)
  return (
    <Wrapper>
      <h1>counter</h1>
      <span id="value">{count}</span>
      <div className="btn-container">
        <button className="btn dec-btn" onClick={() => setCount(count - 1)}>
          decrease
        </button>
        <button className="btn reset-btn" onClick={() => setCount(0)}>
          reset
        </button>
        <button className="btn inc-btn" onClick={() => setCount(count + 1)}>
          increase
        </button>
      </div>
    </Wrapper>
  )
}

// Styling Only

const Wrapper = styled.div`
  max-width: 500px;
  border-radius: ${setRadius};
  padding: 1rem 1.5rem;
  background: ${setColor.grey10};
  text-align: center;
  #value {
    font-size: 6rem;
    font-weight: bold;
  }
  .btn {
    margin: 0.5rem;
  }
  .dec-btn {
    background: ${setColor.darkRed};
    color: ${setColor.mainWhite};
  }
  .dec-btn:hover {
    background: ${setColor.lightRed};
    color: ${setColor.darkRed};
  }
  .inc-btn {
    background: ${setColor.darkGreen};
    color: ${setColor.mainWhite};
  }
  .inc-btn:hover {
    background: ${setColor.lightGreen};
    color: ${setColor.darkGreen};
  }
  .reset-btn {
    background: ${setColor.mainBlack};
    color: ${setColor.mainWhite};
  }
  .reset-btn:hover {
    background: ${setColor.grey5};
    color: ${setColor.mainWhite};
  }
`

export default Counter
