import { styled } from "styled-components"
export const Button = styled.button`
width:150px;
height:50px;
color:blue;
cursor:pointer;
border:5px solid black;
border-radius:5px;
&:hover{
  background-color:yellow;
}`
export const OutLineButton= styled(Button)`
&:hover{
  background-color:pink;
}
`