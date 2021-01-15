import React, { useState, useEffect } from "react";
import CustomerListItem from "../components/CustomerListItem";
import { StyledDiv, StyledWrapDiv } from "../components/StyledElements";

export default function CustomerListPage() {
  const [customerList, setCustomerList] = useState([]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getCustomerList();
    getMe();
  }, []);

  function getCustomerList() {
    const url = "https://frebi.willandskill.eu/api/v1/customers/";
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCustomerList(data.results));
  }

  function getMe() {
    const url = "https://frebi.willandskill.eu/api/v1/me/";
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }

  return (
    <StyledDiv>
      <StyledWrapDiv>
        <h1>User:</h1>
        <h4>
          {userData.firstName} {userData.lastName}
        </h4>
        <h4>Email: {userData.email}</h4>
        <h4>ID: {userData.id}</h4>
      </StyledWrapDiv>
      {customerList.map((item) => {
        return <CustomerListItem key={item.id} customerData={item} />;
      })}
    </StyledDiv>
  );
}
