import React from 'react'
import { Link } from 'react-router-dom'
import { StyledParagraph } from './StyledListPage/StyledParagraph'
import { StyledWrapDiv } from './StyledListPage/StyledWrapDiv'
import {StyledButton} from './StyledLogin/StyledButton'

export default function CustomerListItem({customerData}) {
  return (
      <StyledWrapDiv>

          <h1>{customerData.name}</h1>

          <StyledParagraph>Tel: {customerData.phoneNumber}</StyledParagraph>

          <StyledParagraph>
            <a href={`mailto:${customerData.email}`}>
              {customerData.email}
            </a>
          </StyledParagraph>

          <Link to={`/customers/${customerData.id}`}>
            <StyledButton>Go to customer</StyledButton>
          </Link>

      </StyledWrapDiv>
  )
}

