import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { StyledDetailDiv } from "../components/StyledElements";
import { StyledButton } from "../components/StyledElements";
import { StyledInput } from "../components/StyledElements";

export default function CustomerCreatePage() {
  const [formData, setFormData] = useState({});
  const history = useHistory();

  function validChecker(VatNr) {
    const valid = /^SE*\d{10}$/;
    return valid.test(VatNr);
  }

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
    if (validChecker(formData.vatNr)) {
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
          history.push("/home");
        });
    } else {
      alert("VatNummer måste bestå av SE och 10 siffror");
    }
  }

  const renderObject = {
    renderArray: [
      ["name", "Customer Name", "text"],
      ["email", "Customer Email", "email"],
      ["organisationNr", "Organisation Number", "number"],
      ["paymentTerm", "Payment Term", "number", "valid"],
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
        {renderObject.renderArray.map((item, index) => {
          return (
            <div key={index}>
              <label>{item[1]}:</label>

              <StyledInput
                onChange={handleOnChange}
                type={item[2]}
                name={item[0]}
                value={formData[item[0]] || ""}
              />
            </div>
          );
        })}
        <StyledButton type="submit">Create Customer</StyledButton>
      </form>
    </StyledDetailDiv>
  );
}
