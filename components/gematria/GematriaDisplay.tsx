'use client'
import React from 'react'
import GematriaInput from './GematriaInput'

const GematriaDisplay = () => {
    const [number, setNumber] = React.useState()
  return (
    <div>
        <h1>{number}</h1>
        <GematriaInput {...{setNumber}}/>
    </div>
  )
}

export default GematriaDisplay