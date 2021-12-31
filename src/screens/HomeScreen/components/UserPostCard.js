import React, { useState} from "react";
import SelectedPostCard from "./SelectedPostCard";
import {UserPostContainer, TypographyContainer,Typography, BoldTypography,UserPostDetails} from "../../../utils/StyledComponents";

const UserPostCard = (props) => {
const {post,onSavePostChange,onCancelPostChange} = props;
  const {
    title,
    body,
  } = post;

  const [showCard, setShowCard] = useState(false);

  const showEditCard=()=>{
    setShowCard(true)
  } 
  const closeCard=()=>{
    setShowCard(false)
  }

  //TODO:: add onClickPost  to UserPostsContainer
  return (
    <UserPostContainer>
      <UserPostDetails onClick={showEditCard}>
        <TypographyContainer>
          <BoldTypography>Title: </BoldTypography>
          <Typography>{title}</Typography>
        </TypographyContainer>
        <TypographyContainer>
          <BoldTypography>Body: </BoldTypography>
          <Typography>{body}</Typography>
        </TypographyContainer>
        {/* <button onClick={() => onDeleteUser(user.id)}>Delete</button> */}
      </UserPostDetails>
      {showCard && <SelectedPostCard post={post} onSavePostChange={onSavePostChange} onCancelPostChange={onCancelPostChange} closeCard={closeCard}/>}
    </UserPostContainer>
  )
}

export default UserPostCard;
