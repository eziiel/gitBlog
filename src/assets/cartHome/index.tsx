import * as S from './styled'
import ReactMarkdown from 'react-markdown'
import { FormatedTime } from '../../utils/fomatedTime'

interface DataCardProps {
  title: string
  time: string
  text: string
  number: number
}

export const CartIssus = ({ title, time, text, number }: DataCardProps) => {
  const { FormatedPostComponents, PusbishedAtDistanceToNow } =
    FormatedTime(time)

  return (
    <S.CardContainer to={`/post/${number}`}>
      <S.TitleCart>{title}</S.TitleCart>
      <S.TimeCard title={FormatedPostComponents} dateTime={time}>
        {PusbishedAtDistanceToNow}
      </S.TimeCard>
      <S.TextCard>
        <ReactMarkdown>{text}</ReactMarkdown>
      </S.TextCard>
    </S.CardContainer>
  )
}
