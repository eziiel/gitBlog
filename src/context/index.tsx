import React from 'react'
import { api } from '../lib/axios'

interface ContextDataType {
  login: string
  avatarUrl: string
  bio: string
  followers: string
  company: string
  html_url: string
}

interface User {
  login: string
  company: string
}
interface IssuesDataType {
  user: User
  number: number
  title: string
  body: string
  updated_at: string
  html_url: string
}
interface ContextIssues {
  userData: ContextDataType
  dataIssues: IssuesDataType[]
  dataIssuesSearch: IssuesDataType[]
  searchIssue: (data: string) => void
}

export const ContextDataIssues = React.createContext({} as ContextIssues)

interface ChildreType {
  children: React.ReactNode
}

const initContextIssue = {
  login: '',
  avatarUrl: '',
  bio: '',
  followers: '',
  company: '',
  html_url: '',
}

export const ContextDataIssuesProvider = ({ children }: ChildreType) => {
  const [userData, setUserData] =
    React.useState<ContextDataType>(initContextIssue)
  const [dataIssues, setDataIssues] = React.useState<IssuesDataType[]>([])
  const [dataIssuesSearch, setDataIssuesSearch] = React.useState<
    IssuesDataType[]
  >([])

  const userApiGetDataIssues = React.useCallback(async () => {
    const response = await api.get('/users/eziiel')

    const user = {
      login: response.data.login,
      company: response.data.company,
      avatarUrl: response.data.avatar_url,
      bio: response.data.bio,
      followers: response.data.followers,
      html_url: response.data.html_url,
    }

    setUserData(user)
  }, [])

  const DataIssuesGitHub = React.useCallback(async () => {
    const response = await api.get('/repos/eziiel/gitBlog/issues?sort=created')

    const issue = response.data.map((item: IssuesDataType) => {
      return {
        user: {
          login: item.user.login,
          company: item.user.company,
        },
        number: item.number,
        title: item.title,
        body: item.body,
        updated_at: item.updated_at,
        html_url: item.html_url,
      }
    })
    setDataIssues(issue)
  }, [])

  React.useEffect(() => {
    userApiGetDataIssues()
  }, [userApiGetDataIssues])

  React.useEffect(() => {
    DataIssuesGitHub()
  }, [DataIssuesGitHub])

  const searchIssue = (data: string) => {
    const issueSearchResult = dataIssues.filter((issue) =>
      issue.title.toLocaleLowerCase().startsWith(data.toLocaleLowerCase()),
    )
    setDataIssuesSearch(issueSearchResult)
  }

  return (
    <ContextDataIssues.Provider
      value={{
        userData,
        dataIssues,
        searchIssue,
        dataIssuesSearch,
      }}
    >
      {children}
    </ContextDataIssues.Provider>
  )
}
