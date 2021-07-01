import styled from 'styled-components';

import {
  PageRoom as PageRoomModel,
  Header as HeaderModel,
  Main as MainModel,
} from '../AdminRoom/style';

export const PageRoom = styled(PageRoomModel)``;

export const Header = styled(HeaderModel)``;

export const Main = styled(MainModel)``;

export const Form = styled.form`
  textarea {
    width: 100%;
    border: 0;
    padding: 16px;
    border-radius: 8px;
    background: #fefefe;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    resize: vertical;
    min-height: 130px;
  }

  .form-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;

    .user-info {
      display: flex;
      align-items: center;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      span {
        margin-left: 8px;
        color: #29292e;
        font-weight: 500;
        font-size: 14px;
      }
    }

    > span {
      font-size: 14px;
      color: #737380;
      font-weight: 500;

      button {
        background: transparent;
        border: 0;
        color: #835afd;
        text-decoration: underline;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
`;
