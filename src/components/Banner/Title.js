import React from 'react'
import styled from 'styled-components'
import {setColor} from '../../styles'
const Title = ({ title }) => {
  return <Wrapper>
            <h4>{title}</h4>  
            <div className="line"></div>
          </Wrapper>
}
const Wrapper = styled.div`
  position: relative;
  text-align: center;
  margin: 1.25rem 0;
  h4 {
    color: ${setColor.grey3};
    text-transform: uppercase;
    font-weight: 500;
    background: ${setColor.mainWhite};
    display: inline-block;
    margin-bottom: 0;
    padding: 0 0.6rem;
  }
  .line {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1.5px;
    transform: translateY(-50%);
    background: ${setColor.primary5};
    z-index: -1;
  }
`
export default Title
