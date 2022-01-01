import React from "react";
import styled from "styled-components";
import UserCard from "./UserCard";

const UserCards = ({ users, selectUser, deleteUser, selectedUserId }) => (
  <Container>
    {users?.map((user) => (
      <UserCard
        key={user.id}
        user={user}
        deleteUser={deleteUser}
        selectUser={selectUser}
        isUserSelected={user.id === selectedUserId}
      />
    ))}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;
`;

export default UserCards;