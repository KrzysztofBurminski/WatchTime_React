import React from 'react';
import Episodes from './Episodes';
import * as S from './EpisodesTabStyled';
import Space from '../../../UI/Space';
// import { useSelector } from 'react-redux';

const EpisodesTab = ({ seasons, show }) => {
  return (
    <S.Section>
      <Space height="2rem" />
      <S.ProgressDiv>
        <S.ProgressBar />
      </S.ProgressDiv>
      <Episodes seasons={seasons} show={show} />
    </S.Section>
  );
};

export default EpisodesTab;
