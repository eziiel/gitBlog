import * as S from './styled'
import { NavLink, useParams } from 'react-router-dom'
import {
  CaretLeft,
  GithubLogo,
  Calendar,
  ChatCircle,
  ArrowSquareOut,
} from 'phosphor-react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import React from 'react'
import { FormatedTime } from '../../utils/fomatedTime'
import { api } from '../../lib/axios'

interface IssuesDataType {
  login: string
  title: string
  body: string
  updated_at: string
  comments: string
  html_url: string
}

const IssuesDataTypeBase = {
  login: '',
  title: '',
  body: '',
  updated_at: new Date().toISOString(),
  comments: '',
  html_url: '',
}

export const Issues = () => {
  const [issue, setIssue] = React.useState<IssuesDataType>(IssuesDataTypeBase)
  const issueId = Number(useParams().issue)

  const getIssue = React.useCallback(async () => {
    const response = await api.get(`/repos/eziiel/gitBlog/issues/${issueId}`)

    const issueDate = {
      login: response.data.user.login,
      title: response.data.title,
      body: response.data.body,
      updated_at: response.data.updated_at,
      comments: response.data.comments,
      html_url: response.data.html_url,
    }

    setIssue(issueDate)
  }, [issueId])

  React.useEffect(() => {
    getIssue()
  }, [getIssue])

  const { FormatedPostComponents, PusbishedAtDistanceToNow } = FormatedTime(
    issue.updated_at,
  )

  return (
    <S.IssuesContainer>
      <S.IssuesData>
        <S.IssuesNav>
          <NavLink to="/">
            <CaretLeft />
            voltar
          </NavLink>
          <a href={issue.html_url} target="_blank" rel="noreferrer">
            ver no GitHub
            <ArrowSquareOut size={20} />
          </a>
        </S.IssuesNav>
        <S.IssuesTitle>{issue?.title}</S.IssuesTitle>
        <S.IssueLinks>
          <S.InfoIconsIssue>
            <GithubLogo size={20} color="#3A536B" weight="fill" />
            {issue.login}
          </S.InfoIconsIssue>
          <S.InfoIconsIssueTime
            title={FormatedPostComponents}
            dateTime={FormatedPostComponents}
          >
            <Calendar size={20} color="#3A536B" weight="fill" />
            {PusbishedAtDistanceToNow}
          </S.InfoIconsIssueTime>
          <S.InfoIconsIssue>
            <ChatCircle size={20} color="#3A536B" weight="fill" />
            {issue.comments} comentários
          </S.InfoIconsIssue>
        </S.IssueLinks>
      </S.IssuesData>
      <S.IssueSection>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </S.IssueSection>
    </S.IssuesContainer>
  )
}
