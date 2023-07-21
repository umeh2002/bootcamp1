import React from 'react'
import styled from 'styled-components'

const TeacherAuth = () => {
  return (
   <Container>
    <Main>
<Card>
  <Title>Sign up as a teacher</Title>
  <Botton1>Sign up with google</Botton1>
  <Botton2>Sign up with facebook</Botton2>
  <Divs>
    <Line/>
      <Or> or</Or>
    <Line/>
  </Divs>
  <Holder>
    <Nam>Full name</Nam>
    <Input></Input>
    <Nam>email</Nam>
    <Input></Input>
    <Nam>password</Nam>
    <Input></Input>
  </Holder>
  <Txt>By signing in your agree to the <span> Term</span> and <span>Condition</span></Txt>
  <Botton3>Create Account</Botton3>

</Card>
    </Main>
   </Container>
  )
}

export default TeacherAuth

const Botton3=styled.div`
width: 90%;
height: 40px;
background-color: #FF5C0B;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
margin: 10px 10px;
color: white;
transition: all 350ms;

:hover{
  cursor: pointer;
}
`

const Txt=styled.div`
font-size: 14px;
font-weight: 400;
  font-size: 15px;
  span {
    font-weight: 700;
    cursor: pointer;
    color: #FF5C0B;
  }
`

const Input =styled.input`
width: 270px;
height: 30px;
outline: none;
border: 1px solid ;
border-radius: 10px;
padding-left: 10px;
::placeholder {
    font-size: 15px;
    color: gray;
  }
`

const Nam =styled.div`
margin-top: 10px;
`

const Holder =styled.div`
margin-bottom: 20px;
`

const Or =styled.div`
font-size: 15px;
margin-right: 3px;
display: flex;
align-items: center;
justify-content: center;
`

const Line =styled.div`
height: 1px;
width: 70%;
margin-right: 5px;
background-color: silver;
`

const Divs =styled.div`
display: flex;
align-items: center;
margin: 20px 0px;
`

const Botton2 =styled.div`
width: 90%;
height: 40px;
background-color: #4285F4;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
margin: 10px 10px;
color: white;
transition: all 350ms;

:hover{
  cursor: pointer;
}
`

const Botton1 =styled.div`
width: 90%;
height: 40px;
background-color: #4285F4;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
margin: 10px 10px;
color: white;
transition: all 350ms;

:hover{
  cursor: pointer;
}

`

const Title =styled.div`
text-align: center;
margin: 10px 0px;
font-size: 20px;
font-weight: 700;
`

const Card =styled.div`
 width: 300px;
  min-height: 200px;
  /* border: 1px solid black; */
  background-color: white;
  border-radius: 10px;
  padding-left: 10px;
`

const Main =styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container =styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: grey;
`