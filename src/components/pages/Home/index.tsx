import { FC } from 'react'
import { Header } from 'components/organisms'
import * as S from './styles'
import { motion } from 'framer-motion'

const HomePage: FC = () => {
  return (
    <S.Wrapper>
      <Header />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 400, delay: 0.2, duration: 1 }}
      >
        <S.ContentContainer>
          <S.HeadingContainer>
            Hi, my name is Nicolas<strong>-</strong> I&apos;m a Senior Frontend
            Developer
          </S.HeadingContainer>
        </S.ContentContainer>
      </motion.div>
    </S.Wrapper>
  )
}

export default HomePage
