import { FC } from 'react'
import * as S from './styles'
import { JobCard } from 'components/molecules'
import { TextLink } from 'components/atoms'

const WorkHistory: FC = () => {
  return (
    <S.Wrapper>
      <S.ContentContainer>
        <h2>Work History</h2>
        <h3>
          Pushing the world foward by creating powerful products that are used
          by millions of people every day.
        </h3>
        <JobCard
          direction="left"
          src="/assets/images/ifood_mercado.png"
          alt="ifood groceries website image"
          width={550}
          height={280}
        >
          <h3>Ifood Groceries</h3>
          <p>
            by <TextLink label="Ifood"></TextLink>
          </p>
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
          height={280}
        >
          <h3>BEES</h3>
          <p>by ABInbev</p>
          <p>
            BEES is a B2B marketplace responsible for connecting ABInbev with
            its points of sale, handling logistics and payment. After handling
            this connection with success BEES was also extended for other brands
            as BRF, Minalba and many others
          </p>
        </JobCard>
        <JobCard
          direction="left"
          src="/assets/images/iclubs.png"
          alt="iClubs website image"
          width={550}
          height={280}
        >
          <h3>iClubs</h3>
          <p>by iClubs</p>
          <p>
            iClubs is a loyalty platform for banks, it takes the loyalty
            relationship between a bank and a client even further beyond,
            allowing it to have many aspects and benefits.
          </p>
        </JobCard>
        <JobCard
          direction="right"
          src="/assets/images/poliedro.png"
          alt="P+ website image"
          width={550}
          height={280}
        >
          <h3>P+</h3>
          <p>by Poliedro</p>
          <p>
            iClubs is a loyalty platform for banks, it takes the loyalty
            relationship between a bank and a client even further beyond,
            allowing it to have many aspects and benefits.
          </p>
        </JobCard>
      </S.ContentContainer>
    </S.Wrapper>
  )
}

export default WorkHistory
