import React from 'react'
import { NavLink } from 'react-router-dom'
import * as S from './styled'

interface DataCardProps {
  title: string
  time: string
  text: string
}

export const CartIssus = ({ title, time, text }: DataCardProps) => {
  return (
    <S.CardContainer>
      <NavLink to={`/issues/${title}`}>
        <S.TitleCart>{title}</S.TitleCart>
        <S.TimeCard>{time}</S.TimeCard>
        <S.TextCard>{text}</S.TextCard>
      </NavLink>
    </S.CardContainer>
  )
}
