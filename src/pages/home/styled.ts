import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin: 0 auto 5rem auto;
  max-width: 865px;
  background: ${(props) => props.theme['blue-600']};
  z-index: 2;
  margin-top: -7rem;
  position: relative;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const HomePerfil = styled.section`
  padding: 2rem;
  display: flex;
  gap: 2rem;
  align-content: center;
  box-shadow: 0 0 100px 5px ${(props) => props.theme['blue-700']};
  border-radius: 10px;
`
export const HomePerfilImage = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 10px;
`

export const HomePerfilData = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: space-between;
  gap: 1rem;
`

export const HomePerfilNameLink = styled.div`
  display: flex;
  justify-content: space-between;
`

export const HomePerfilTitle = styled.strong`
  font-size: 1.5rem;
  color: ${(props) => props.theme['white-100']};
`

export const HomePerfilGitLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  color: ${(props) => props.theme['blue-100']};
  text-transform: uppercase;
  font-size: 0.875rem;
  padding: 0.5rem;
  border-radius: 10px;
`

export const HomePerfilBio = styled.p`
  color: ${(props) => props.theme['blue-200']};
`

export const HomePerfilInfos = styled.div`
  color: ${(props) => props.theme['blue-200']};
  margin-top: 1rem;
  display: flex;
  justify-content: start;
  gap: 3rem;
`
export const InfoIconsPerfil = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const CardsContainer = styled.section`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 2rem;
`
