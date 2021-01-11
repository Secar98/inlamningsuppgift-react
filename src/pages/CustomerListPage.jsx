import React, {useState, useEffect} from 'react'
import CustomerListItem from '../components/CustomerListItem'
import { StyledDiv } from '../components/StyledListPage/StyledDiv'

export default function CustomerListPage() {

  const [customerList, setCustomerList] = useState([])

  useEffect( () => {
    getCustomerList()
  }, [])

  function getCustomerList() {
    const url = "https://frebi.willandskill.eu/api/v1/customers/"
    const token = localStorage.getItem("WEBB20")
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => setCustomerList(data.results))
  }

  return (
    <StyledDiv>
      {customerList.map(item => {
        return <CustomerListItem key={item.id} customerData={item} />
      })}
    </StyledDiv>
  )
}
