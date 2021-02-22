import React from "react"
import styled from "styled-components"


const myH2 = ({ children, title }) => {
  if (title) {
    return (
      <HeadingTwo>
        <h2>{children}</h2>
        <div className="underline"></div>
      </HeadingTwo>
    )
  }
  return (
    <h2
      style={{
        margin: "2rem 0",
        color: "hsl(210, 22%, 49%)",
      }}
    >
      {children}
    </h2>
  )
}
const HeadingTwo = styled.div`
  margin: 2rem 0;
  .underline {
    width: 5rem;
    height: 5px;
    background: ${({theme}) => theme.primary4};
  }
`
const myH4 = props => {
  return (
    <h3 style={{ margin: "2rem 0", color: "hsl(180, 62%, 45%)" }}>
      {props.children}
    </h3>
  )
}

export { myH2, myH4 }
