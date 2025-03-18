import { useState } from 'react'
import Numberselector from './Numberselector'
import Totalscore from './Totalscore'
import { styled } from 'styled-components'
import Rolldice from './Rolldice'
import { Button, OutLineButton } from '../Styled/Button'
import Rules from './Rules'

const Gameplay = () => {
  const [selectnum, setSelectnum] = useState();
  const [currentDice, setCurrentDice] = useState(2);
  const [score, setScore] = useState(0);
  const [error, setError] = useState();

  const genRandomNoArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const rollDice = () => {
    if (!selectnum) {
      setError('Please select the Number')
      return;
    }

    setError(" ");

    let randNum = genRandomNoArbitrary(1, 7);
    setCurrentDice((prev) => randNum);


    if (selectnum === randNum) {
      setScore((prev) => prev + 4)
    }
    else {setScore((prev) => prev - 1)}
setSelectnum(undefined)
  }
  const resetScore=()=>{
    setScore(0)
  }
  return (

    <MainContainer>
      <div className='yu'>
        <Totalscore score={score} />
        <Numberselector
          selectnum={selectnum}
          setSelectnum={setSelectnum}
          error={error}
          setError={setError}
        />

      </div>
      <Rolldice
        currentDice={currentDice}
        rollDice={rollDice} />
      <div className='btn'>
        <Button onClick={resetScore}>Reset</Button>
        <OutLineButton>Rules</OutLineButton>
        <Rules/>
      </div>
    </MainContainer>

  )
}

export default Gameplay
const MainContainer = styled.main`
background-color:#9a9a9a;
border-radius:20px;
padding:60px;
.yu{
  display:flex;
 justify-content:space-around;
 align-items:center;

}
.btn{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:20px;
}
`