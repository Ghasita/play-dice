import React from 'react'
import { styled } from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h1>How to play Game</h1>
      <div className='text'>
<p>Select any number</p>
<p>Click on Dice</p>
<p>If selcted number is equal to number on dice , you get 4 points</p>
<p>If selcted number is not equal to number on dice , you get -1 points</p>

      </div>
    </RulesContainer>
  )
}

export default Rules
const RulesContainer=styled.div`
background-color:black;
padding:20px;
color:yellow;
border-radius:40px;
`