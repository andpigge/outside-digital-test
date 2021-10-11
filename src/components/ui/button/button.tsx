import React, { FC } from 'react';
import cn from 'classnames/bind';

import styles from './button.module.css';

interface IButtonProps {
  text: string,
  type: 'text' | 'button',
  size: 'big' | 'small'
}

export const Button:FC<IButtonProps> = (props):JSX.Element => {
  const { text, type, size } = props;

  return (
    <button>
      { text }
    </button>
  );
};
