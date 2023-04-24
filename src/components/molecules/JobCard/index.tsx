import { FC } from 'react'
import * as S from './styles'
import { Image } from 'components/atoms'

const JobCard: FC = () => {
  return (
    <S.JobCardWrapper>
      <Image
        alt="bees logo image"
        src="/assets/images/bees.png"
        quality={'100'}
      />
      <S.JobCardInfo></S.JobCardInfo>
    </S.JobCardWrapper>
  )
}

export default JobCard
