import React from 'react';
import * as S from './AboutStyled.jsx';
import heroImg from '../../assets/tvMan.jpg';
import { IoTvSharp, IoStatsChartSharp, IoEyeSharp } from 'react-icons/io5';
import { FaLinkedinIn, FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const About = () => {
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

      <S.WrapperAboutItem right>
        <S.Content right>
          <S.Icon>
            <IoTvSharp />
          </S.Icon>
          <S.Column>
            <S.ItemTitle>GREAT VARIETY OF TV SHOWS</S.ItemTitle>
            <p>
              A wide variety of television series. You have access to our large
              database of over 10,000 TV series. Lots of action programs full of
              fighting, comedy shows full of humor and mystery shows with hidden
              secrets.
            </p>
          </S.Column>
        </S.Content>
      </S.WrapperAboutItem>
      <S.WrapperAboutItem>
        <S.Content>
          <S.IconSmall>
            <IoEyeSharp />
          </S.IconSmall>
          <S.Column>
            <S.ItemTitle>CHECK WHAT YOU'VE SEEN</S.ItemTitle>
            <p>
              Since now you have the option to choose not only episodes, but
              whole seasons that you have watched. It is quick and simple. All
              you have to do is to click on episode or on an eye icon visible in
              the episodes section.
            </p>
          </S.Column>
          <S.Icon big>
            <IoEyeSharp />
          </S.Icon>
        </S.Content>
      </S.WrapperAboutItem>
      <S.WrapperAboutItem right>
        <S.Content right>
          <S.Icon>
            <IoStatsChartSharp />
          </S.Icon>
          <S.Column>
            <S.ItemTitle>SEE YOUR STATISTICS</S.ItemTitle>
            <p>
              We know it very well that some people like to see what they have
              achieved. We met these expectations and started collecting your
              data. Now you are able to see your personal statistics in watching
              tv shows.
            </p>
          </S.Column>
        </S.Content>
      </S.WrapperAboutItem>

      <S.MediaWrapper>
        <S.FollowText>FOLLOW US!</S.FollowText>
        <S.RowMedia>
          <S.IconMedia href="https://linkedin.com/" target="_blank">
            <FaLinkedinIn />
          </S.IconMedia>
          <S.IconMedia href="https://www.facebook.com/" target="_blank">
            <FaFacebookSquare />
          </S.IconMedia>
          <S.IconMedia href="https://www.instagram.com/" target="_blank">
            <FaInstagram />
          </S.IconMedia>
        </S.RowMedia>
      </S.MediaWrapper>
    </>
  );
};

export default About;
