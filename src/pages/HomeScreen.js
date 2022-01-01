import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getUsers, getPosts } from "../utils/api";
import UserCards from "../components/UserCards";
import UserPosts from "../components/UserPosts";
import EditPostPopUp from "../components/EditPostPopUp";

const HomeScreen = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(async () => {
    const users = await getUsers();
    const posts = await getPosts();
    setUsers(users.data);
    setPosts(posts.data);
  }, []);

  const deleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);

    if (selectedUserId === userId) {
      setSelectedUserId(null);
    }
  };

  const deleteUserPost = async (postId) => {
    const newUserPosts = posts.filter((post) => post.id !== postId);
    setPosts(newUserPosts);
  };

  const editUserPost = (postId) => {
    const post = posts.find((post) => post.id === postId);
    setSelectedPost(post);
  };

  const confirmEditPost = (title, body) => {
    const newPosts = [...posts];
    const post = newPosts.find((post) => post.id === selectedPost.id);
    post.title = title;
    post.body = body;
    setPosts(newPosts);
    setSelectedPost(null);
  };

  const userPosts = posts.filter((post) => post.userId === selectedUserId);

  const selectedUser = users.find((user) => user.id === selectedUserId)

  return (
    <Container>
      <Title>Users</Title>
      <UserCards
        users={users}
        selectUser={(userId) => setSelectedUserId(userId)}
        deleteUser={deleteUser}
        selectedUserId={selectedUserId}
      />

      {userPosts.length > 0 && (
        <>
          <Title>{selectedUser.name} Posts</Title>
          <UserPosts
            posts={userPosts}
            editUserPost={editUserPost}
            deleteUserPost={deleteUserPost}
          />
        </>
      )}

      {selectedPost && (
        <EditPostPopUp
          post={selectedPost}
          closePopUp={() => setSelectedPost(null)}
          confirmEditPost={confirmEditPost}
        />
      )}
    </Container>
  );
};

export default HomeScreen;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 60px;
`;