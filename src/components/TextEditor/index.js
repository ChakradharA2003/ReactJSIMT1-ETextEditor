import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  MainContainer,
  TextEditorCard,
  HeadingImageContainer,
  Heading,
  Image,
  TextEditorContainer,
  EditingOptionsContainer,
  ButtonBold,
  ButtonItalic,
  ButtonUnderLine,
  HorizontalLine,
  TextAreaContent,
} from './TextEditorStyling'

class TextEditor extends Component {
  state = {
    bold: false,
    italic: false,
    underline: false,
  }

  onClickedBold = () => {
    this.setState(prevState => ({
      bold: !prevState.bold,
    }))
  }

  onClickedItalic = () => {
    this.setState(prevState => ({
      italic: !prevState.italic,
    }))
  }

  onClickedUnderLine = () => {
    this.setState(prevState => ({
      underline: !prevState.underline,
    }))
  }

  render() {
    const {bold, italic, underline} = this.state
    const isBold = bold ? 'bold' : 'thin'
    const isItalic = italic ? 'italic' : 'Roboto'
    const isUnderLine = underline ? 'underline' : 'none'
    return (
      <MainContainer>
        <TextEditorCard>
          <HeadingImageContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </HeadingImageContainer>
          <TextEditorContainer>
            <EditingOptionsContainer>
              <li>
                <ButtonBold
                  data-testid="bold"
                  onClick={this.onClickedBold}
                  isBold={isBold}
                >
                  <VscBold size={22} color={bold ? '#faff00' : '#f1f5f9'} />
                </ButtonBold>
              </li>
              <li>
                <ButtonItalic
                  data-testid="italic"
                  onClick={this.onClickedItalic}
                  isItalic={isItalic}
                >
                  <GoItalic size={22} color={italic ? '#faff00' : '#f1f5f9'} />
                </ButtonItalic>
              </li>
              <li>
                <ButtonUnderLine
                  data-testid="underline"
                  onClick={this.onClickedUnderLine}
                  isUnderLine={isUnderLine}
                >
                  <AiOutlineUnderline
                    size={22}
                    color={underline ? '#faff00' : '#f1f5f9'}
                  />
                </ButtonUnderLine>
              </li>
            </EditingOptionsContainer>
            <HorizontalLine />
            <TextAreaContent
              isBold={isBold}
              isItalic={isItalic}
              isUnderLine={isUnderLine}
              rows="30"
              cols="49"
            >
              Hello world!
            </TextAreaContent>
          </TextEditorContainer>
        </TextEditorCard>
      </MainContainer>
    )
  }
}
export default TextEditor
