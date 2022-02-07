import React from 'react';

import { css } from '@emotion/react';
import GridLoader from 'react-spinners/GridLoader';

const Spinner = () => {
  const spinnerCss = css`
    position: absolute;
    top: calc(50% - 60px);
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  return (
    <GridLoader color={'#8423de'} loading={true} css={spinnerCss} size={20} />
  );
};

export default Spinner;
