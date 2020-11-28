import React ,{useState} from 'react'
import Sign from "../components/SignStyle"
import styled from "styled-components";
import { fetchLogin } from '../services/fetchData'

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  width: 14rem;
  height: 25px;
  border-radius: 10px ;
`;
const ContentInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Button = styled.button`
  width: 5rem;
  border-radius: 8px;
`;

function Login () {
    const [ stateUser ,setStateUser ] = useState('')
    const [ statePass ,setStatePass ] = useState('')
    // const [token, setToken] = useState('')
    const handleOnChangeUser = (event) => {
        setStateUser(event.target.value)
      }
      const handleOnChangePassword = event => {
        setStatePass(event.target.value)
      }
      const handleOnSubmit = async event => {
        if (stateUser!== '' && statePass !== '') {
          await fetchLogin(stateUser, statePass).then(response => console.log(response))
        }
      }
      const handleKeyPress = event => {
        if (event.keyCode === 13) {
          handleOnSubmit()
        }
      }
  return (
  <>

  <div>Login Page</div>
  <Content>
        <ContentInput>
          <h3>Username</h3>
          <Input type="text" name="user_name" onChange={handleOnChangeUser} placeholder="username" onKeyDown={handleKeyPress}></Input>
        </ContentInput>
        <ContentInput>
          <h3>Password</h3>
          <Input type="password" name="password" onChange={handleOnChangePassword} placeholder="password" onKeyDown={handleKeyPress}></Input>
        </ContentInput>
        <Button onClick={handleOnSubmit}>Summit</Button>
      </Content>
  
  
  </>
  )
}
export default Login
