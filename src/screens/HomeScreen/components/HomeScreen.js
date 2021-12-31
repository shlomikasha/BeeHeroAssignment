import React, {useEffect, useState} from "react";
import styled from "styled-components";

import UserCard from "./UserCard";
import UserPostCard from "./UserPostCard"
import { getUsers, getPosts } from "../../../utils/api";
import { HomeScreenContainer, UserCardsContainer,UserPostsContainer } from "../../../utils/StyledComponents";


const HomeScreen = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);


  const [selectedUser, setSelectedUser] = useState(null);
  const [userPosts, setUserPosts] = useState(null);
  const [userPost, setUserPost] = useState(null);



  useEffect(async ()  =>  {
    const users = await getUsers();
    const posts = await getPosts();
    setUsers(users.data);
    setPosts(posts.data);
  }, []);
  
  useEffect(() => {
    if (selectedUser && posts.length) {
      const selectedUserPosts = posts.filter(post => post.userId === selectedUser.id);
      setUserPosts(selectedUserPosts);
    }
  }, [selectedUser])

  const onClickUser = (userId) => {
    if (!userId) {
      throw new Error('user id is not defined');
    }
    const [user] = users.filter(user => user.id === userId);
    setSelectedUser(user);
  }
  const onClickPost = (postId) => {
    if (!postId) {
      throw new Error('post id is not defined');
    }
    const [post] = posts.filter(post => post.id === postId);
    setUserPost(post);
  }

  const onDeleteUser = (userId) => {
    if (!userId) {
      throw new Error('user id is not defined');
    }

    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
    const updatedPosts = posts.filter(post => post.userId!== userId)
    setPosts(updatedPosts);
    if(userPosts[0] && userPosts[0].userId===userId){
      setUserPosts([])
    }
  
  }

  const replacePostInPostArr=(postId,updatedPost,postArr)=>{
    return postArr.map(post => {
      if(post.id===postId){
        post=updatedPost;
      }
    })
  }

//TODO:: reuse and create method for the inner  onChange methodolgy.

  const onSavePostChange = (postId, post) => {
    setUserPosts(replacePostInPostArr(postId,post,userPosts))
    setPosts(replacePostInPostArr(postId,post,posts))
  }
  const onCancelPostChange = (postId, body) => {
    console.log('GOT CANCELED')
  }

  return(
    <HomeScreenContainer>
      <UserCardsContainer>
        {
          users && users.length && users.map(user => <UserCard key={user.id} user={user} onDeleteUser={onDeleteUser}
          onClickUser={onClickUser}/>)
        }
      </UserCardsContainer>
      <UserPostsContainer>
        {
          userPosts && userPosts.length && userPosts.map(post => <UserPostCard key={post.id} post={post} onSavePostChange={onSavePostChange} onCancelPostChange={onCancelPostChange}/>)
          //TODO: add onClickPost
        }
      </UserPostsContainer>
    </HomeScreenContainer>
  );
}

export default HomeScreen;


{/* <div className="home__user-wrapper">
{users?.map(user => {
  return (
    <UserCard key={user.id} >
      <div className="user-information" onClick={() => onClickUser(user.id)}>
        <span className="user-name">{user.name} ({user.username})</span>
        <span className="user-name">{user.name} ({user.username})</span>
        <span className="user-name">{user.name} ({user.username})</span>
        <span className="user-name">{user.name} ({user.username})</span>
      </div>
      <button className="delete-btn" onClick={() => onDeleteUser(user.id)}>Delete</button>
    </UserCard>
  )
})}
{userPosts?.map(post => {
  return (
    <div className="post-card" key={post.id}>
      <input type="text" className="post-title" value={post.title} onChange={(e) => onChangePostTitle(post.id, e)}/>
      <span className="post-body">{post.body}</span>
    </div>
  )
})}
</div> */}