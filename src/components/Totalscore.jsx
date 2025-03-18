import React from 'react'
import styled from 'styled-components'
const Totalscore = ({score}) => {

  return (
    <Totalsc>
        
        <input className='inp' placeholder={score}/><p>Total Score</p>
        
    </Totalsc>
  )
}

export default Totalscore
const Totalsc=styled.div`
max-width:100px;

text-align:center;

p{
    color:brown;
    font-size:20px;
    font-weight:400
}
.inp{
  font-size:30px;
  max-width:80px;
  
}
`