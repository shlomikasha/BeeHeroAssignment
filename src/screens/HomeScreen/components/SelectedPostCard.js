import React from "react";
import {SelectedPostCardContainer, TypographyContainer,EditableTypography, BoldTypography,ButtonContainer,SaveButton,CancelButton} from "../../../utils/StyledComponents";

const SelectedPostCard = (props) => {
const {post,onSavePostChange,onCancelPostChange,closeCard} = props;
  const {
    title,
    body,
  } = post;


  return (
    <SelectedPostCardContainer>
      <TypographyContainer>
        <BoldTypography>Title: </BoldTypography>
        <EditableTypography>{title}</EditableTypography>
      </TypographyContainer>
      <TypographyContainer>
        <BoldTypography>Body: </BoldTypography>
        <EditableTypography>{body}</EditableTypography>
      </TypographyContainer>
      <ButtonContainer>
        <SaveButton onClick={()=>{
          onSavePostChange({title:'',body:''});
          closeCard();
          }}/>
        <CancelButton onClick={()=>{
          onCancelPostChange();
          closeCard();
          }}/>
      </ButtonContainer>
    </SelectedPostCardContainer>
  )
}
  export default SelectedPostCard;
