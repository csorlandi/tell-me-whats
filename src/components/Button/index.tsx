import { ButtonHTMLAttributes } from 'react';

import * as S from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

/* eslint-disable react/button-has-type */

export function Button({ ...props }: ButtonProps): JSX.Element {
  return <S.Button {...props} />;
}
