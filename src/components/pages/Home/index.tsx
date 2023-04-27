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
          <S.InfoTextContainer>
            <p>
              My name is Nicolas Molina, a software engineer passionate about
              frontend, training and family. I&apos;m 23 years old and based in
              Sorocaba, São Paulo
            </p>
            <p>
              I&apos;ve developed more than 30 projects for over 3 countries
              around the world, projects with more than 3 million monthly users
              and generating a revenue of 200 million dollars per month, for
              leading companies in the market like the AB-INBev, Ifood, Ambev,
              BTG Pactual, UOL, Poliedro, among others.
            </p>
            <p>
              Former student of Computer Science in Universidade Federal de São
              Carlos. I love how programming and technology skills can be used
              to create something new and with a rich user experience. Always
              like to work together with other people because I think its
              possible to learn something new everyday if you talk and try to
              understand different people.
            </p>
          </S.InfoTextContainer>
        </S.InfoContainer>
        <WorkHistory />
      </S.ContentContainer>
    </S.Wrapper>
  )
}

export default HomePage
