import styled from 'styled-components'

export const CommentsContainer = styled.div`
  width: 85%;
  padding-bottom: 50px;
  @media screen and (min-width: 768px) {
    max-width: 1000px;
  }
`

export const CommentsTitle = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin: 0px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`

export const NameInput = styled.input`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  width: 40%;
  height: 36px;
  border: none;
  border-bottom: 0.5px solid #cbd5e1;
  margin-bottom: 20px;
  outline: none;
`

export const CommentTextInput = styled.textarea`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  width: 80%;
  border: none;
  border-bottom: 0.5px solid #cbd5e1;
  margin-bottom: 20px;
  outline: none;
`

export const CommentButton = styled.button`
  align-self: flex-start;
  color: #ffffff;
  background-color: #1976d2;
  font-family: 'Roboto';
  font-size: 16px;
  border: none;
  padding: 10px 16px;
  margin-top: 10px;
  margin-bottom: 24px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`

export const CommentsList = styled.ul`
  padding-left: 0;
  list-style-type: none;
`
