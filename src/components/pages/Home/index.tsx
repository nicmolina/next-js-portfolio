import { FC } from 'react'
import { Header, WorkHistory } from 'components/organisms'
import { Image } from 'components/atoms'
import * as S from './styles'

const HomePage: FC = () => {
  return (
    <S.Wrapper>
      <Header />
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
        <S.HeadingContainer>
          Hi, my name is Nicolas — I&apos;m a software engineer, senior frontend
          developer & husband
        </S.HeadingContainer>
        <S.InfoContainer>
          <Image
            src="/assets/images/casamento_image.jfif"
            alt="bees logo image"
            width={300}
            height={400}
            quality={'100'}
          />
          <p>
            Former student of Computer Science in Universidade Federal de São
            Carlos. I love how programming and technology skills can be used to
            create something new and with a rich user experience. Always like to
            work together with other people because I think its possible to
            learn something new everyday if you talk and try to understand
            different people.
          </p>
        </S.InfoContainer>
        <WorkHistory />
      </S.ContentContainer>
    </S.Wrapper>
  )
}

export default HomePage
