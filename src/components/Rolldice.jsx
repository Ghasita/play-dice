import React from 'react'
import { styled } from 'styled-components'
const Rolldice = ({rollDice,currentDice}) => {
  
 return (
    <DiceContainer>
      <div className='dice' onClick={rollDice} >
        <img
          src={`/images/dice/dice_${currentDice}.png`} width='80px' height='80px' />
      </div>

      <p>Hit dice to roll</p>
      

    </DiceContainer>
  )
}

export default Rolldice


const DiceContainer = styled.div`

display:flex;
flex-direction:column;
align-items:center;
margin-top:48px;

.dice{
  cursor:pointer;
}
p{
  color:red;
}
.rice{
  background-color: green;
  width:300px;
  height:100px;
}
`