import styled from 'styled-components';

import {
  PageAuth as PageAuthModel,
  Aside as AsideModel,
  Main as MainModel,
} from '../Home/style';

export const PageAuth = styled(PageAuthModel)``;

export const Aside = styled(AsideModel)``;

export const Main = styled(MainModel)`
  .main-content {
    h2 {
      font-size: 24px;
      margin: 64px 0 24px;
      font-family: 'Poppins', sans-serif;
    }

    p {
      font-size: 14px;
      color: #737388;
      margin-top: 16px;

      a {
        color: #e559f9;
      }
    }
  }
`;
