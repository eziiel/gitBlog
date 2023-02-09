import styled from 'styled-components'

export const IssuesContainer = styled.main`
  margin: 0 auto 5rem auto;
  max-width: 865px;
  background: ${(props) => props.theme['blue-600']};
  z-index: 2;
  margin-top: -7rem;
  position: relative;
  border-radius: 10px;
`
export const IssuesData = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;

  gap: 1rem;
  align-content: center;
  box-shadow: 0 0 100px 5px ${(props) => props.theme['blue-700']};
  border-radius: 10px;
`

export const IssuesNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.5rem;
    font-weight: 500;
    font-size: 1.125rem;
    color: ${(props) => props.theme['blue-100']};
  }
`

export const IssuesTitle = styled.strong`
  font-size: 1.5rem;
`

export const IssueLinks = styled.div`
  color: ${(props) => props.theme['blue-200']};
  margin-top: 1rem;
  display: flex;
  justify-content: start;
  gap: 3rem;
`
export const InfoIconsIssue = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const IssueSection = styled.section`
  padding: 2rem 1rem;
`
