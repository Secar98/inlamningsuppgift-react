import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { StyledDetailDiv } from "../components/StyledElements";
import { StyledButton } from "../components/StyledElements";

export default function CustomerDetailPage(props) {
  const customerId = props.match.params.id;
  const [customerItem, setCustomerItem] = useState(null);
  const history = useHistory();
  let renderObject = {};

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
      .then((data) => setCustomerItem(data))
      .then();
  }

  function deleteCustomer() {
    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(() => history.push("/customers"));
  }

  useEffect(() => {
    getCustomerItem();
  }, []);

  if (customerItem) {
    renderObject = {
      renderArray: [
        ["Organisation Number", customerItem.organisationNr],
        ["Payment Term", customerItem.paymentTerm],
        ["Phone Number", customerItem.phoneNumber],
        ["Reference", customerItem.reference],
        ["VAT Number", customerItem.vatNr],
      ],
    };
  }

  return (
    <StyledDetailDiv>
      {customerItem ? (
        <div>
          <h1>{customerItem.name}</h1>
          <table>
            <tbody>
              {renderObject.renderArray.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                  </tr>
                );
              })}
              <tr>
                <td>Email</td>
                <td>
                  <a href={`mailto:${customerItem.email}`}>
                    {customerItem.email}
                  </a>
                </td>
              </tr>

              <tr>
                <td>Website</td>
                <td>
                  <a href={customerItem.website} target="_blank">
                    {customerItem.website}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <StyledButton delete onClick={deleteCustomer}>
            Delete Customer
          </StyledButton>
          <Link to={`/customers/${customerId}/edit`}>
            <StyledButton>Edit Customer</StyledButton>
          </Link>
        </div>
      ) : (
        <span>Laddar data...</span>
      )}
    </StyledDetailDiv>
  );
}
