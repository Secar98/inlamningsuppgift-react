import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  StyledButton,
  StyledDetailDiv,
  StyledInput,
} from "../components/StyledElements";

export default function CustomerUpdatePage(props) {
  const customerId = props.match.params.id;

  const [formData, setFormData] = useState({});
  const history = useHistory();

  function getCustomerItem() {
    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setFormData(data));
  }

  useEffect(() => {
    getCustomerItem();
  }, []);

  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const newObj = { ...formData, [name]: value };
    setFormData(newObj);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(() => history.push(`/customers/${customerId}`));
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
  console.log(formData);

  return (
    <StyledDetailDiv>
      <h1>Update Customer</h1>

      <form onSubmit={handleOnSubmit}>
        {renderObject.renderArray.map((item) => {
          return (
            <>
              <label>{item[1]}</label>
              <StyledInput
                onChange={handleOnChange}
                type={item[2]}
                name={item[0]}
                value={formData[item[0]] || ""}
              />
            </>
          );
        })}

        <StyledButton type="submit">Update Customer</StyledButton>
      </form>
    </StyledDetailDiv>
  );
}
