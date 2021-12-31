import React from "react";
import {UserCardContainer, TypographyContainer,Typography, BoldTypography,UserCardDetailsContainer} from "../../../utils/StyledComponents";

const UserCard = (props) => {
  const {user,onDeleteUser,onClickUser} = props;
  const {
    name,
    username,
    email,
    address,
    company
  } = user;
  const {geo} = address;
  
  return (
    <UserCardContainer>
    <button onClick={() => onDeleteUser(user.id)}>Delete</button>
      <UserCardDetailsContainer onClick={() => onClickUser(user.id)}>
      <TypographyContainer>
        <BoldTypography>Name: </BoldTypography>
        <Typography>{name}(username)</Typography>
      </TypographyContainer>
      <TypographyContainer>
        <BoldTypography>Email: </BoldTypography>
        <Typography>{email}</Typography>
      </TypographyContainer>
      <TypographyContainer>
        <BoldTypography>Latitude: </BoldTypography>
        <Typography>{geo.lat}</Typography>
      </TypographyContainer>
      <TypographyContainer>
        <BoldTypography>Longitude: </BoldTypography>
        <Typography>{geo.lng}</Typography>
      </TypographyContainer>
      <TypographyContainer>
        <BoldTypography>Company: </BoldTypography>
        <Typography>{company.name}</Typography>
      </TypographyContainer>
      </UserCardDetailsContainer>
    </UserCardContainer>
  )
}

export default UserCard;
