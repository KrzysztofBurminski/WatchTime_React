import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as S from './InfoSectionStyled';

const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  img,
  alt,
}) => {
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  const initial = { opacity: 0, y: 30 };

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
      });
    }
  }, [inView, animation]);

  return (
    <>
      <S.InfoContainer lightBg={lightBg}>
        <S.InfoWrapper>
          <S.InfoRow imgStart={imgStart}>
            <S.Column1>
              <S.TextWrapper ref={ref}>
                <S.TopLine
                  initial={initial}
                  animate={animation}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {topLine}
                </S.TopLine>
                <S.Heading
                  lightText={lightText}
                  initial={initial}
                  animate={animation}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {headline}
                </S.Heading>
                <S.Subtitle
                  darkText={darkText}
                  initial={initial}
                  animate={animation}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  {description}
                </S.Subtitle>
              </S.TextWrapper>
            </S.Column1>
            <S.Column2
              initial={initial}
              animate={animation}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <S.ImgWrap>
                <S.Img src={img} alt={alt} />
              </S.ImgWrap>
            </S.Column2>
          </S.InfoRow>
        </S.InfoWrapper>
      </S.InfoContainer>
    </>
  );
};

export default InfoSection;
