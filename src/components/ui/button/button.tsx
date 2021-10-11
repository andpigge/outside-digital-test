import React, { FC } from 'react';
import cn from 'classnames';

import styles from './button.module.css';

interface IButtonProps {
  text: string
  type: 'text' | 'button' | 'main'
  size?: 'big' | 'small'
}

export const Button:FC<IButtonProps> = (props):JSX.Element => {
  const { text, type, size } = props;

  return (
    <button className={cn({
      [styles.buttonBig] : type === 'button' && size === 'big',
      [styles.buttonSmall] : type === 'button' && size === 'small',
      [styles.buttonText] : type === 'text',
      [styles.buttonMain] : type === 'main',
    })}>
      { text }
    </button>
  );
};
