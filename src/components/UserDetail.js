import React from "react";
import styled from "styled-components";

const UserDetail = ({ category, value }) => (
  <div>
    <Category>{category}:</Category>
    <Value> {value}</Value>
  </div>
);

export default UserDetail;

const Category = styled.span`
  color: #ff5151;
  text-decoration: underline;
  font-weight: bold;
`;

const Value = styled.span`
  color: white;
`;