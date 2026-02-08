import React from 'react'

const Result = ({password}) => {
  return (
    <>
      <h3 className="pass-title">The Password Is...</h3>
      <p className="result">{password}</p>
    </>
  )
}

export default Result