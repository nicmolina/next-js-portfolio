import { FC } from 'react'
import * as S from './styles'
import { motion } from 'framer-motion'

const WorkHistory: FC = () => {
  return (
    <S.Wrapper>
      <S.ContentContainer>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            delay: 0.2,
            duration: 1
          }}
        >
          <S.HeadingContainer>Work History</S.HeadingContainer>
        </motion.div>
      </S.ContentContainer>
    </S.Wrapper>
  )
}

export default WorkHistory
