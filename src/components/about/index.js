import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { infoData } from './AboutData.js';

import * as S from './AboutStyled.jsx';
import InfoSection from './InfoSection.js';
import heroImg from '../../assets/tvMan.jpg';
import { FaLinkedinIn, FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const About = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  const initial = {
    opacity: 0,
    x: 50,
  };

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
      });
    }
  }, [inView, animation]);

  return (
    <>
      <S.AboutHeroImg src={heroImg}>
        <S.AboutTitle>WatchTime</S.AboutTitle>
      </S.AboutHeroImg>

      <S.WrapperGeneral>
        <p>
          <strong>WatchTime</strong> is home to your favorite tv shows.
        </p>
        <p>
          It is a place where you can discover a lot of new positions to watch.
          We offer you a wide range of television series. Moreover, you can
          follow shows you are watching or you would like to watch in the
          future. We give you the opportunity to check as watched the episode
          watched or all season.
        </p>
      </S.WrapperGeneral>

      <section>
        {infoData.map((item, index) => (
          <InfoSection {...item} key={index} />
        ))}
      </section>

      <S.MediaWrapper ref={ref}>
        <S.FollowText>FOLLOW US!</S.FollowText>
        <S.RowMedia>
          <S.IconMedia
            href="https://linkedin.com/"
            target="_blank"
            initial={initial}
            animate={animation}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <FaLinkedinIn />
          </S.IconMedia>
          <S.IconMedia
            href="https://www.facebook.com/"
            target="_blank"
            initial={initial}
            animate={animation}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <FaFacebookSquare />
          </S.IconMedia>
          <S.IconMedia
            href="https://www.instagram.com/"
            target="_blank"
            initial={initial}
            animate={animation}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <FaInstagram />
          </S.IconMedia>
        </S.RowMedia>
      </S.MediaWrapper>
    </>
  );
};

export default About;
