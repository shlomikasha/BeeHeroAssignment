import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";

const EditPostPopUp = ({ post, closePopUp, confirmEditPost }) => {
  const [titleInputText, setTitleInputText] = useState(post.title);
  const [bodyInputText, setBodyInputText] = useState(post.body);

  return (
    <>
      <Backdrop isVisible={!!post} />

      <Container>
        <Title>Edit Post</Title>

        <PostForm
          onSubmit={() => confirmEditPost(titleInputText, bodyInputText)}
        >
          <Input
            placeholder="Title..."
            value={titleInputText}
            onChange={(event) => setTitleInputText(event.target.value)}
          />

          <Textarea
            placeholder="Content..."
            value={bodyInputText}
            onChange={(event) => setBodyInputText(event.target.value)}
          />

          <ButtonsContainer>
            <Button type="submit">Confirm</Button>
            <Button onClick={closePopUp}>Close</Button>
          </ButtonsContainer>
        </PostForm>
      </Container>
    </>
  );
};

export default EditPostPopUp;

const Backdrop = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Container = styled.div`
  width: 700px;
  height: 500px;
  background-color: #506d84;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 20px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 60px;
`;

const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  font-size: 16px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

const Textarea = styled.textarea`
  height: 200px;
  padding: 10px;
  font-size: 16px;
  border: none;
`;

const ButtonsContainer = styled.div`
  display: flex;
  column-gap: 10px;
  align-self: center;
  margin-top: 20px;
`;