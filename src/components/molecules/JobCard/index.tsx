import { FC } from 'react'
import { IJobCardProps } from './interfaces'
import * as S from './styles'
import { Image } from 'components/atoms'

const JobCard: FC<IJobCardProps> = ({
  quality,
  children,
  direction,
  ...props
}) => {
  return (
    <S.JobCardWrapper>
      {direction === 'left' ? (
        <Image quality={quality ?? '100'} {...props} />
      ) : null}
      <S.JobCardInfo>{children}</S.JobCardInfo>
      {direction === 'right' ? (
        <Image quality={quality ?? '100'} {...props} />
      ) : null}
    </S.JobCardWrapper>
  )
}

export default JobCard
