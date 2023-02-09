import styled from 'styled-components'

export const CardContainer = styled.div`
  max-width: 416px;
  border-radius: 10px;
  background: ${(props) => props.theme['blue-500']};

  cursor: pointer;

  a {
    width: 100%;
    height: 100%;
    border-radius: 10px;

    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 100px;
    padding: 2.5rem 1.5rem;
  }
`

export const TitleCart = styled.h1`
  grid-row: 1;
  grid-column: 1;
  color: ${(props) => props.theme['white-100']};
  font-size: 1.125rem;
`

export const TimeCard = styled.div`
  grid-row: 1;
  grid-column: 2;
  color: ${(props) => props.theme['white-300']};
  font-size: 0.875rem;

  justify-self: end;
`

export const TextCard = styled.p`
  grid-row: 2;
  grid-column: 1 / -1;
  color: ${(props) => props.theme['white-300']};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`
