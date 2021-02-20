import React from 'react'
import styled from 'styled-components'

const Title = ({ title }) => {
  return <Wrapper>
            <h3>{title}</h3>  
            <div className="line"></div>
          </Wrapper>
}
const Wrapper = styled.div`
  position: relative;
  text-align: center;
  margin: 1.25rem 0;
  h3 {
    text-transform: uppercase;
    font-weight: 500;
    background: ${({theme}) => theme.mainWhite};
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
    background: ${({theme}) => theme.primary4};
    z-index: -1;
  }
`
export default Title
