import React from "react"
const Code = ({ children }) => {
  return (
    <code
      style={{
        background: "hsl(125, 33%, 96%)",
        color: "hsl(210, 22%, 49%)",
        padding: "1rem",
        borderRadius:".25rem",
      }}
    >
      {children}
    </code>
  )
}

export default Code
