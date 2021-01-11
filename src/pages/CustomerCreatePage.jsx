import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { StyledDetailDiv } from '../components/StyledDetailPage/StyledDetailDiv'
import { StyledButton } from '../components/StyledLogin/StyledButton'
import { StyledInput } from '../components/StyledLogin/StyledInput'


export default function CustomerCreatePage() {
  const [formData, setFormData] = useState({})
  const history = useHistory()

  function handleOnChange(e) {
    const name = e.target.name
    const value = e.target.value
    const newObj = {...formData, [name]: value}
    setFormData(newObj)
  }

  function renderInput(name, label, type) {
    return (
      <div>
        <label>{label}: </label>
        <StyledInput 
          type={type || "text"} 
          name={name} 
          onChange={handleOnChange}
        />
      </div>
    )
  }

  function handleOnSubmit(e){
    e.preventDefault()
    const url = "https://frebi.willandskill.eu/api/v1/customers/"
    const token = localStorage.getItem("WEBB20")
    fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then( res => res.json())
    .then( data => {
      history.push('/customers')
    })
  }

  return (
    <StyledDetailDiv>
      <h1>Create Customer</h1>
      <form onSubmit={handleOnSubmit}>
        {renderInput("name", "Customer Name")}
        {renderInput("email", "Customer Email", "email")}
        {renderInput("organisationNr", "Organisation Number")}
        {renderInput("paymentTerm", "Payment Term", "number")}
        {renderInput("phoneNumber", "Phone Number", "tel")}
        {renderInput("reference", "Reference")}
        {renderInput("vatNr", "Vat Number")}
        {renderInput("website", "Website", "url")}
        <StyledButton type="submit">Create Customer</StyledButton>

      </form>
    </StyledDetailDiv>
  )
}