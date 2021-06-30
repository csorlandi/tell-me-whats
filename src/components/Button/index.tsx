import { ButtonHTMLAttributes } from 'react';

import './style.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

/* eslint-disable react/button-has-type */

export function Button({
  isOutlined = false,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button className={`button ${isOutlined ? 'outlined' : ''}`} {...props} />
  );
}
