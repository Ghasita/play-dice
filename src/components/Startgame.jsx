import React from 'react'

import styled from 'styled-components'
import { Button } from '../Styled/Button'
const Startgame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img
          src="/images/num.jpeg"
        />
      </div>
      <div>
        
        <Button onClick={toggle}>Play now</Button>
      
      <h1>NUMBER GAME 1</h1>
      </div>
    </Container>


  )
}

export default Startgame
const Container = styled.div`
max-width:900px;`





