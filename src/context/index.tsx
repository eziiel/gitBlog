import React from 'react'
import { api } from '../lib/axios'

interface ContextDataType {
  login: string
  avatarUrl: string
  bio: string
  followers: string
  company: string
}

interface ContextIssues {
  userData: ContextDataType
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
}

export const ContextDataIssuesProvider = ({ children }: ChildreType) => {
  const [userData, setUserData] =
    React.useState<ContextDataType>(initContextIssue)

  const userApiGetDataIssues = React.useCallback(async () => {
    const response = await api.get('/users/eziiel')

    const user = {
      login: response.data.login,
      avatarUrl: response.data.avatar_url,
      bio: response.data.bio,
      followers: response.data.followers,
      company: response.data.company,
    }

    setUserData(user)
  }, [])

  React.useEffect(() => {
    userApiGetDataIssues()
  }, [userApiGetDataIssues])

  return (
    <ContextDataIssues.Provider value={{ userData }}>
      {children}
    </ContextDataIssues.Provider>
  )
}
