import React from 'react'
import * as S from './styled'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContextDataIssues } from '../../../../context'

const searchSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchSchema>

export const FormSearchIssues = () => {
  const [watchIssue, setWatchIssue] = React.useState('')
  const { searchIssue } = React.useContext(ContextDataIssues)
  const { register, handleSubmit, watch } = useForm<SearchFormInput>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      query: '',
    },
  })
  const handleSubmitInput = () => {
    searchIssue(watch().query)

    const query = watch().query
    localStorage.setItem('gitBlog-search-issue.1.0.0', JSON.stringify(query))

    const Local = localStorage.getItem('gitBlog-search-issue.1.0.0')
    const DataLocal = Local ? JSON.parse(Local) : ''
    setWatchIssue(DataLocal)
  }

  React.useEffect(() => {
    const Local = localStorage.getItem('gitBlog-search-issue.1.0.0')
    const DataLocal = Local ? JSON.parse(Local) : ''
    setWatchIssue(DataLocal)
  }, [])

  return (
    <S.FormContainer onChange={handleSubmit(handleSubmitInput)}>
      <S.FormInfo>
        <S.FormTitle>Publicações</S.FormTitle>
        <S.FormInfoIssue>6 publicações</S.FormInfoIssue>
      </S.FormInfo>
      <S.FormInput
        value={watchIssue}
        type="text"
        placeholder="Buscar Conteúdo"
        {...register('query')}
      />
    </S.FormContainer>
  )
}
