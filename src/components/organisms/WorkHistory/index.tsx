import { FC } from 'react'
import * as S from './styles'
import { JobCard } from 'components/molecules'

const WorkHistory: FC = () => {
  return (
    <S.Wrapper>
      <S.ContentContainer>
        <S.HeadingContainer>Work History</S.HeadingContainer>
        <JobCard
          direction="left"
          src="/assets/images/ifood_mercado.png"
          alt="ifood groceries website image"
          width={550}
          height={320}
        >
          <h2>Ifood Groceries</h2>
          <p>by Ifood</p>
          <p>
            Ifood Groceries is a B2C marketplace that is responsible for
            receiving orders from clients to groceries. On this project I was
            also responsible for recreating from scratch the application
            responsible for separating the itens.
          </p>
        </JobCard>
        <JobCard
          direction="right"
          src="/assets/images/bees.png"
          alt="bees website image"
          width={550}
          height={320}
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
