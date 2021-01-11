import React from 'react'
import { Link } from 'react-router-dom'
import { StyledWrapDiv } from './StyledListPage/StyledWrapDiv'
import {StyledButton} from './StyledLogin/StyledButton'

export default function CustomerListItem({customerData}) {
  return (
    <>
      <StyledWrapDiv>
        
          <h1>{customerData.name}</h1>
        
          <p>Tel: {customerData.phoneNumber}</p>
          <p>Email: {customerData.email}</p>
          <Link to={`/customers/${customerData.id}`}>
            <StyledButton component={Link} to={'/first'}>Go to customer</StyledButton>
          </Link>
      </StyledWrapDiv>
    </>
  )
}

