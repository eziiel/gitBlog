import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li, a {
    text-decoration: none;
    list-style: none;
  }

  button, input {
    padding: 1rem;
    font-size: 1rem;
  } 

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['blue-200']};
  }

  body {
    color: ${(props) => props.theme['white-300']};
    background: ${(props) => props.theme['blue-600']};
    font-family: 'Nunito', sans-serif;
  }
`
