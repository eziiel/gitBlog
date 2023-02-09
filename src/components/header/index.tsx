import Logo from '../../../public/images/Logo.svg'
import BackImgHeader from '../../../public/images/Cover.png'
import * as S from './styled'

export const Header = () => {
  return (
    <S.LogoContainer>
      <S.CoverHeaderImg src={BackImgHeader} alt="" />
      <S.LogoHeaderImg src={Logo} alt="" />
    </S.LogoContainer>
  )
}
