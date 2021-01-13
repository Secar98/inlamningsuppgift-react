import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { StyledDetailDiv } from "../components/StyledElements";
import { StyledButton } from "../components/StyledElements";
import { StyledInput } from "../components/StyledElements";

export default function CustomerCreatePage() {
  const [formData, setFormData] = useState({});
  const history = useHistory();

  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const newObj = { ...formData, [name]: value };
    setFormData(newObj);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    const url = "https://frebi.willandskill.eu/api/v1/customers/";
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        history.push("/customers");
      });
  }

  const renderObject = {
    renderArray: [
      ["name", "Customer Name", "text"],
      ["email", "Customer Email", "email"],
      ["organisationNr", "Organisation Number", "number"],
      ["paymentTerm", "Payment Term", "text"],
      ["phoneNumber", "Phone Number", "tel"],
      ["reference", "Reference", "text"],
      ["vatNr", "Vat Number", "text"],
      ["website", "Website", "url"],
    ],
  };

  return (
    <StyledDetailDiv>
      <h1>Create Customer</h1>

      <form onSubmit={handleOnSubmit}>
        {renderObject.renderArray.map((item) => {
          return (
            <>
              <label>{item[1]}:</label>

              <StyledInput
                onChange={handleOnChange}
                type={item[2]}
                name={item[0]}
                value={formData[item[0]] || ""}
              />
            </>
          );
        })}
        <StyledButton type="submit">Create Customer</StyledButton>
      </form>
    </StyledDetailDiv>
  );
}
