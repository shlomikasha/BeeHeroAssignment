import React from "react";
import styled, { css } from "styled-components";
import UserDetail from "./UserDetail";
import { Button } from "./Button";

const UserCard = ({ user, deleteUser, selectUser, isUserSelected }) => {
  const { name, username, email, address, company, id } = user;

  return (
    <Container isUserSelected={isUserSelected}>
      <Name>{name}</Name>

      <DetailsContainer>
        <UserDetail category="Username" value={username} />
        <UserDetail category="Email" value={email} />
        <UserDetail category="Lat" value={address.geo.lat} />
        <UserDetail category="Lng" value={address.geo.lng} />
        <UserDetail category="Company" value={company.name} />
      </DetailsContainer>

      <ButtonsContainer>
        <Button onClick={() => selectUser(id)}>Show posts</Button>
        <Button onClick={() => deleteUser(id)}>Delete</Button>
      </ButtonsContainer>
    </Container>
  );
};


const Container = styled.div`
  width: 320px;
  height: 250px;
  margin: 20px;
  border-radius: 20px;
  background-color: #161e54;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  border: 3px solid transparent;
  padding: 20px;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;

  ${({ isUserSelected }) =>
    isUserSelected &&
    css`
      border: 3px solid #ff5151;
      transform: scale(1.1);
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.6);
    `}
`;

const Name = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: white;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonsContainer = styled.div`
  display: flex;
  column-gap: 10px;
  align-self: center;
  margin-top: 20px;
`;

export default UserCard;