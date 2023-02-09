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
  const { userData } = React.useContext(ContextDataIssues)

  return (
    <S.HomeContainer>
      <S.HomePerfil>
        <S.HomePerfilImage src={userData.avatarUrl} />
        <S.HomePerfilData>
          <S.HomePerfilNameLink>
            <S.HomePerfilTitle>{userData.login}</S.HomePerfilTitle>
            <S.HomePerfilGitLogo
              href="https://github.com/eziiel"
              target="_blank"
            >
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

      {/* <S.CardsContainer>
        {dataTeste.map((item) => (
          <CartIssus
            key={item.title}
            title={item.title}
            time={String(item.time)}
            text={item.text}
          />
        ))}
      </S.CardsContainer> */}
      <S.CardsContainer>
        <CartIssus
          title="JavaScript data types and data structures"
          time={new Date().toISOString()}
          text="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',"
        />
        <CartIssus
          title="uauauauuaauauauauauau"
          time="ha 3dias"
          text="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',"
        />
        <CartIssus
          title="JavaScript data types and data structures"
          time="ha 3dias"
          text="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',"
        />
      </S.CardsContainer>
    </S.HomeContainer>
  )
}
