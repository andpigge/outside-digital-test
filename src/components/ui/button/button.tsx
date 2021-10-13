import React, { FC } from 'react';
import cn from 'classnames';

import styles from './button.module.css';

interface IButtonProps {
  text: string
  type: 'text' | 'button' | 'main'
  cb?: () => void
  size?: 'big' | 'small'
  disabled?: boolean
}

export const Button:FC<IButtonProps> = (props):JSX.Element => {
  const { text, type, cb, size, disabled } = props;

  return (
    <button onClick={ cb } className={cn({
      [styles.buttonBig] : type === 'button' && size === 'big',
      [styles.buttonSmall] : type === 'button' && size === 'small',
      [styles.buttonText] : type === 'text',
      [styles.buttonMain] : type === 'main',
      [styles.disabled] : disabled && type !== 'text',
    })}
    disabled={ disabled }>
      { text }
    </button>
  );
};
