import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const UserPost = ({ post, editUserPost, deleteUserPost }) => {
  const { title, body, id } = post;

  return (
    <Container>
      <Title>{title}</Title>
      <Content>{body}</Content>

      <ButtonsContainer>
        <Button onClick={() => editUserPost(id)}>Edit</Button>
        <Button onClick={() => deleteUserPost(id)}>Delete</Button>
      </ButtonsContainer>
    </Container>
  );
};

export default UserPost;

const Container = styled.div`
  width: 60%;
  border: 1px solid black;
  margin-bottom: 20px;
  background-color: #161e54;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  margin-bottom: 6px;
`;

const Content = styled.p`
  width: 60%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  column-gap: 10px;
  margin-top: 20px;
`;