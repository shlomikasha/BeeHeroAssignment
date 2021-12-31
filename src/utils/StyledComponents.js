import styled from "styled-components";


export const UserCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 25%
  width: 190px;
  height: align-items;
  border-radius: 4px;
  background-color: gray;
  padding: 5px;
`
export const UserCardDetailsContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: inherit;
  height: auto;
  background-color: gray;
`
export const BoldTypography = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: white;
`
export const Typography = styled.div`
  font-size: 12px;
  color: blue;
`

export const EditableTypography = styled.textarea`
  font-size: 12px;
  color: blue;
`


export const TypographyContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  padding: 5px;
`

export const HomeScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  flex: 1;
`

export const UserCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 50vh;
`

export const UserPostsContainer = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: 50vh;
  background-color: white;
`

export const UserPostContainer = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex: 1 0 21%;
  height: 150px;
  border-radius: 4px;
  background-color: gray;
  padding: 10px;
  margin: 10px;
`
export const UserPostDetails = styled.div`
overflow: auto;
display: flex;
flex-direction: column;
flex: 1 0 21%;
height: 150px;
border-radius: 4px;
background-color: gray;
padding: 10px;
margin: 10px;
`

export const SelectedPostCardContainer = styled.div`
  position:absolute;
  top:70%; right:50%;bottom:0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex: 1 0 21%;
  height: 400x;
  border-radius: 4px;
  border-color: black;
  background-color: pink;
  padding: 10px;
  margin: 10px;
`

export const ButtonContainer= styled.div`
  display: flex;
  padding: 10px;
  margin: 10px;
  flex-direction: row;
`
export const SaveButton= styled.button`
  width: 100px;
  height: 20px;
  background: green;
  content: "Save";
  color: black;
`
export const CancelButton= styled.button`
  width: 100px;
  height: 20px;
  background: red;
  content: "Cancel";
  color: black;
`