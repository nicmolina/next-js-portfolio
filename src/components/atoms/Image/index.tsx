import { ImageProps } from 'next/image'
import { FC } from 'react'
import * as S from './styles'

const Image: FC<ImageProps> = ({ alt, src, quality, ...props }) => {
  return (
    <S.ImageWrapper
      alt={alt}
      src={src}
      quality={quality ? quality : '100'}
      {...props}
    />
  )
}

export default Image
