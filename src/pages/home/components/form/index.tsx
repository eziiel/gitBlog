import React from 'react'
import * as S from './styled'

export const FormSearchIssues = () => {
  return (
    <S.FormContainer>
      <S.FormInfo>
        <S.FormTitle>Publicações</S.FormTitle>
        <S.FormInfoIssue>6 publicações</S.FormInfoIssue>
      </S.FormInfo>
      <S.FormInput type="text" placeholder="Buscar Conteúdo" />
    </S.FormContainer>
  )
}
