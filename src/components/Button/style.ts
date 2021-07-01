import styled, { css } from 'styled-components';

type ButtonProps = {
  isOutlined?: boolean;
};

export const Button = styled.button<ButtonProps>`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: ${({ isOutlined }) => (isOutlined ? '#fff' : '#835afd')};
  color: ${({ isOutlined }) => (isOutlined ? '#835afd' : '#fff')};
  padding: 0 32px;

  ${({ isOutlined }) =>
    isOutlined &&
    css`
      border: 1px solid #835afd;
    `};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
