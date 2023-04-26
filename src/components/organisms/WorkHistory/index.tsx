import { FC } from 'react'
import * as S from './styles'
import { JobCard } from 'components/molecules'

const WorkHistory: FC = () => {
  return (
    <S.Wrapper>
      <S.ContentContainer
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
        <JobCard
          direction="left"
          src="/assets/images/bees.png"
          alt="bees logo image"
          width={1000}
          height={1000}
        >
          <h2>BEES</h2>
          <p>by ABInbev</p>
          <p>
            BEES is a B2B marketplace responsible for connecting ABInbev with
            its points of sale, handling logistics and payment. After handling
            this connection with success BEES was also extended for other brands
            as BRF, Minalba and many others
          </p>
        </JobCard>
      </S.ContentContainer>
    </S.Wrapper>
  )
}

export default WorkHistory
