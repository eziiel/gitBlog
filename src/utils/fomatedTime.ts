import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function FormatedTime(time: string) {
  const DatePublish = new Date(time)

  const FormatedPostComponents = format(
    DatePublish,
    "d 'de' LLLL 'às' HH:mm'h'",
  )

  const PusbishedAtDistanceToNow = formatDistanceToNow(DatePublish, {
    locale: ptBR,
    addSuffix: false,
  })
  return {
    FormatedPostComponents,
    PusbishedAtDistanceToNow,
    DatePublish,
  }
}
