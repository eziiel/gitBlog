import styled from 'styled-components'

export const FormContainer = styled.form`
  width: 100%;
  display: flex;

  flex-direction: column;
  gap: 1rem;

  margin-top: 3rem;
`

export const FormInfo = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FormTitle = styled.span`
  color: ${(props) => props.theme['white-100']};
  font-size: 1.125rem;
`

export const FormInfoIssue = styled.span`
  color: ${(props) => props.theme['blue-200']};
`

export const FormInput = styled.input`
  border-radius: 6px;
  padding: 1rem 1.5rem;
  background: ${(props) => props.theme['blue-800']};
  color: ${(props) => props.theme['blue-200']};

  height: 56px;

  border: none;

  ::placeholder {
    color: ${(props) => props.theme['blue-300']};
    letter-spacing: 0.5px;
  }
`
