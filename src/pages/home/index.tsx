import React from 'react'
import { CartIssus } from '../../assets/cartHome'
import * as S from './styled'
import {
  ArrowSquareOut,
  GithubLogo,
  Buildings,
  UsersThree,
} from 'phosphor-react'
import { FormSearchIssues } from './components/form'
import { ContextDataIssues } from '../../context'

export const Home = () => {
  const { userData, dataIssues } = React.useContext(ContextDataIssues)

  return (
    <S.HomeContainer>
      <S.HomePerfil>
        <S.HomePerfilImage src={userData.avatarUrl} />
        <S.HomePerfilData>
          <S.HomePerfilNameLink>
            <S.HomePerfilTitle>{userData.login}</S.HomePerfilTitle>
            <S.HomePerfilGitLogo href={userData.html_url} target="_blank">
              GitHub
              <ArrowSquareOut size={20} />
            </S.HomePerfilGitLogo>
          </S.HomePerfilNameLink>
          <S.HomePerfilBio>{userData.bio}</S.HomePerfilBio>
          <S.HomePerfilInfos>
            <S.InfoIconsPerfil>
              <GithubLogo size={20} color="#3A536B" weight="fill" />
              {userData.login}
            </S.InfoIconsPerfil>
            <S.InfoIconsPerfil>
              <Buildings size={20} color="#3A536B" weight="fill" />
              {userData.company}
            </S.InfoIconsPerfil>
            <S.InfoIconsPerfil>
              <UsersThree size={20} color="#3A536B" weight="fill" />
              {userData.followers} seguidores
            </S.InfoIconsPerfil>
          </S.HomePerfilInfos>
        </S.HomePerfilData>
      </S.HomePerfil>

      <FormSearchIssues />

      <S.CardsContainer>
        {dataIssues.map((item) => (
          <CartIssus
            key={item.number}
            title={item.title}
            time={item.updated_at}
            text={item.body}
            number={item.number}
          />
        ))}
      </S.CardsContainer>
    </S.HomeContainer>
  )
}
