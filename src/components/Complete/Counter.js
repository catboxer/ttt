import React from "react"
import styled from "styled-components"
import {setRadius} from '../../themes/styles'
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
  background: ${({theme}) => theme.grey10};
  text-align: center;
  #value {
    font-size: 6rem;
    font-weight: bold;
  }
  .btn {
    margin: 0.5rem;
  }
  .dec-btn {
    background: ${({theme}) => theme.darkRed};
    color: ${({theme}) => theme.mainWhite};
  }
  .dec-btn:hover {
    background: ${({theme}) => theme.lightRed};
    color: ${({theme}) => theme.darkRed};
  }
  .inc-btn {
    background: ${({theme}) => theme.darkGreen};
    color: ${({theme}) => theme.mainWhite};
  }
  .inc-btn:hover {
    background: ${({theme}) => theme.lightGreen};
    color: ${({theme}) => theme.darkGreen};
  }
  .reset-btn {
    background: ${({theme}) => theme.mainBlack};
    color: ${({theme}) => theme.mainWhite};
  }
  .reset-btn:hover {
    background: ${({theme}) => theme.grey5};
    color: ${({theme}) => theme.mainWhite};
  }
`

export default Counter
