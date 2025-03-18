import React from 'react'
import styled from 'styled-components'
const Numberselector = ({ selectnum, setSelectnum, error, setError }) => {
  const numArray = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (val) => {
    setSelectnum(val);
    setError("")
  }

  return (
    <Numbersel>
      <h1 className='error'>{error}</h1>
      <div className='flex'>
        {numArray.map((val, i) => {
          return (
            <Box className='box'
              isSelectnum={val === selectnum}
              key={i} onClick={() => numberSelectorHandler(val)}>
              {val} </Box>
          )
        })
        }


      </div>

      <p>Select Number</p>
    </Numbersel>
  )
}

export default Numberselector
const Numbersel = styled.div`
display:flex;
flex-direction:column;
align-items:end;
margin-top:14px;

.flex{
  display:flex;
  gap:24px;
  
  
}
.box{
  border-radius:5px;
 
}
p{
  color:green;
 
}
.error{
  color:blue;
 }
`
const Box = styled.div`

width:72px;
height:72px;
font-size:30px;
font-weight:600;
border:1px solid black;
display:grid;
color:red;
place-items:center;

cursor:pointer;
background-color:${(prop) => prop.isSelectnum ? '#5a1a1a' : 'white'}


`