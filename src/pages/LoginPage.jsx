import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import {StyledLabel} from '../components/StyledElements'
import {StyledLogginDiv} from '../components/StyledElements'
import { StyledInput } from '../components/StyledElements'
import { StyledButton } from '../components/StyledElements'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "Sebastian.Carlson@yh.nackademin.se",
    password: "javascriptoramverk"
  })
  const history = useHistory()


  function handleOnSubmit(e) {
    e.preventDefault()
    const url = "https://frebi.willandskill.eu/api-token-auth/"
    const payload = {
      email: formData.email,
      password: formData.password
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("WEBB20", data.token)
      history.push("/customers")
    })

  }

  function handleOnChange(e) {
    const inputName = e.target.name
    const inputValue = e.target.value
    const newObj = {...formData, [inputName]: inputValue}
    setFormData(newObj)
  }

  return (
    <>
      <StyledLogginDiv>
        <form onSubmit={handleOnSubmit}>
          <StyledLabel>Email</StyledLabel>
          <StyledInput name="email" type="email" value={formData.email} onChange={handleOnChange}/>
          <StyledLabel>Password</StyledLabel>
          <StyledInput name="password" type="password" value={formData.password} onChange={handleOnChange}/>
          <StyledButton type="submit">Log In</StyledButton>
        </form>
      </StyledLogginDiv>
    </>
  )
}
