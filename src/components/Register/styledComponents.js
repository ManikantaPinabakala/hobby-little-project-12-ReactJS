import styled from 'styled-components'

export const RegisterPageContainer = styled.div`
  height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const AppLogo = styled.img``

export const FormContainer = styled.div`
  flex-grow: 1;
  align-self: center;
  display: flex;
  align-items: center;
`

export const RegisterImage = styled.img`
  width: 45%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const JoinHeading = styled.h1`
  color: #334155;
  font-size: 50px;
  margin-block: 0 15px;
`

export const FormLabel = styled.label`
  color: #64748b;
  font-size: 14px;
  font-weight: bold;
`

export const InputElement = styled.input`
  width: 350px;
  color: #7b8794;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  padding: 15px;
  margin-block: 10px 20px;
  outline: none;
`

export const SelectElement = styled.select`
  width: 350px;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  padding: 15px;
  margin-block: 10px 30px;
  outline: none;
`

export const OptionElement = styled.option``

export const RegisterNowButton = styled.button`
  align-self: flex-start;
  background-color: #3b82f6;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  padding: 12px 20px;
  cursor: pointer;
`

export const ErrorMessage = styled.p`
  align-self: flex-start;
  color: #ff0b37;
  margin-block: 5px;
`
