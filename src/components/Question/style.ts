import styled, { css } from 'styled-components';

type QuestionProps = {
  isHighlighted?: boolean;
  isAnswered?: boolean;
};

export const Question = styled.div<QuestionProps>`
  background: ${({ isHighlighted, isAnswered }) => {
    if (isAnswered) return '#dbdcdd';

    if (isHighlighted && !isAnswered) return '#f4f0ff';

    return '#fefefe';
  }};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  &:not(:first-child) {
    margin-top: 8px;
  }

  ${({ isHighlighted }) =>
    isHighlighted &&
    css`
      border: 1px solid #835afd;
    `}

  p {
    color: #29292e;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

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
        color: ${({ isHighlighted }) =>
          isHighlighted ? '#29292e' : '#737380'};
        font-size: 14px;
      }
    }

    > div {
      display: flex;
      gap: 16px;
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;

      transition: filter 0.2s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: #737380;
        gap: 8px;

        &.liked {
          color: #835afd;

          svg path {
            stroke: #835afd;
          }
        }
      }

      &:hover {
        filter: brightness(0.6);
      }
    }
  }
`;
