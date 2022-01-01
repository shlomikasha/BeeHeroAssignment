import React from "react";
import styled from "styled-components";
import UserPost from "./UserPost";

const UserPosts = ({ posts, editUserPost, deleteUserPost }) => (
  <Container>
    {posts?.map((post) => (
      <UserPost
        key={post.id}
        post={post}
        deleteUserPost={deleteUserPost}
        editUserPost={editUserPost}
      />
    ))}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default UserPosts;