import React from 'react'
import * as S from './styled'
import { NavLink, useParams } from 'react-router-dom'
import {
  CaretLeft,
  GithubLogo,
  Calendar,
  ChatCircle,
  ArrowSquareOut,
} from 'phosphor-react'

export const Issues = () => {
  const issue = useParams().issue

  return (
    <S.IssuesContainer>
      <S.IssuesData>
        <S.IssuesNav>
          <NavLink to="/">
            <CaretLeft />
            voltar
          </NavLink>
          <a href="https://github.com/eziiel" target="_blank" rel="noreferrer">
            ver no GitHub
            <ArrowSquareOut size={20} />
          </a>
        </S.IssuesNav>
        <S.IssuesTitle>{issue}</S.IssuesTitle>
        <S.IssueLinks>
          <S.InfoIconsIssue>
            <GithubLogo size={20} color="#3A536B" weight="fill" />
            cameronwll
          </S.InfoIconsIssue>
          <S.InfoIconsIssue>
            <Calendar size={20} color="#3A536B" weight="fill" />
            GB-Online
          </S.InfoIconsIssue>
          <S.InfoIconsIssue>
            <ChatCircle size={20} color="#3A536B" weight="fill" />
            32 seguidores
          </S.InfoIconsIssue>
        </S.IssueLinks>
      </S.IssuesData>
      <S.IssueSection></S.IssueSection>
    </S.IssuesContainer>
  )
}
