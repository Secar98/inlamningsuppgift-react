import React from "react";
import { Link } from "react-router-dom";
import { StyledParagraph } from "../components/StyledElements";
import { StyledWrapDiv } from "../components/StyledElements";
import { StyledButton } from "../components/StyledElements";

export default function CustomerListItem({ customerData }) {
  return (
    <StyledWrapDiv>
      <h1>{customerData.name}</h1>

      <StyledParagraph>Tel: {customerData.phoneNumber}</StyledParagraph>

      <StyledParagraph>
        <a href={`mailto:${customerData.email}`}>{customerData.email}</a>
      </StyledParagraph>

      <Link to={`/home/${customerData.id}`}>
        <StyledButton>Go to customer</StyledButton>
      </Link>
    </StyledWrapDiv>
  );
}
