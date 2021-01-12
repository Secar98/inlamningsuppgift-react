import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CustomerUpdateItem from "../components/CustomerUpdateItem";
import { StyledButton } from "../components/StyledElements";

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

  function renderInput(name, label, type) {
    return (
      <div>
        <label>{label}</label>
        <input
          type={type || "text"}
          name={name}
          value={formData[name] || ""}
          onChange={handleOnChange}
        />
      </div>
    );
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

  const renderObject1 = {
    renderArray: [
      ["name", "Customer Name", "text"],
      ["email", "Customer Email", "email"],
      ["organisationNr", "Organisation Number", "number"],
      ["paymentTerm", "Payment Term", "text"],
      ["phoneNumber", "Phone Number", "tel"],
      ["reference", "Reference", "text"],
      ["vatNr", "Vat Number", "text"],
      ["website", "website", "url"],
    ],
  };
  console.log(formData);

  return (
    <div>
      <h1>Update Customer</h1>

      <form onSubmit={handleOnSubmit}>
        {renderObject1.renderArray.map((item) => {
          <CustomerUpdateItem
            data={formData}
            label={item[0]}
            input={item[1]}
            type={item[2]}
          />;
        })}

        {/*<CustomerUpdateItem name={renderObject1.label[0]} input={renderObject1.input[0]} type={renderObject1.type[0]}></CustomerUpdateItem>*/}

        {/*{renderInput("name", "Customer Name")}
        {renderInput("email", "Customer Email", "email")}
        {renderInput("organisationNr", "Organisation Number")}
        {renderInput("paymentTerm", "Payment Term", "number")}
        {renderInput("phoneNumber", "Phone Number", "tel")}
        {renderInput("reference", "Reference")}
        {renderInput("vatNr", "Vat Number")}
        {renderInput("website", "Website", "url")}*/}
        <StyledButton type="submit">Update Customer</StyledButton>
      </form>
    </div>
  );
}
