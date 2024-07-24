import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TextEditorCard = styled.div`
  background-color: #1b1c22;
  height: 80%;
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 18px;
`
export const HeadingImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 45%;
`
export const Heading = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 35px;
`
export const Image = styled.img`
  height: 400px;
  width: 380px;
`
export const TextEditorContainer = styled.div`
  background-color: #25262c;
  border: 1px solid #334155;
  border-radius: 12px;
  height: 100%;
  width: 45%;
`
export const EditingOptionsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  margin: 18px;
  padding: 0px;
`
export const ButtonBold = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  color: ${props => (props.isBold === 'bold' ? '#faff00' : '#f1f5f9')};
`
export const ButtonItalic = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  color: ${props => (props.isItalic === 'italic' ? '#faff00' : '#f1f5f9')};
`
export const ButtonUnderLine = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  color: ${props =>
    props.isUnderLine === 'underline' ? '#faff00' : '#f1f5f9'};
`
export const HorizontalLine = styled.hr`
  height: 1px;
  border: 1px solid #334155;
`
export const TextAreaContent = styled.textarea`
  background-color: transparent;
  border-width: 0px;
  margin: 5px 10px 10px 5px;
  color: #f8fafc;
  outline: none;
  padding: 10px;
  font-size: 16px;
  font-weight: ${props => (props.isBold === 'bold' ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic === 'italic' ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.isUnderLine === 'underline' ? 'underline' : 'normal'};
`
