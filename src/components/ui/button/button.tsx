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
    <>
      { type === 'button' &&
      <button onClick={ cb } className={cn(styles.button, {
        [styles.buttonBig] : size === 'big',
        [styles.buttonSmall] : size === 'small',
        [styles.buttonDisabled] : disabled === true
      })}
      disabled={ disabled }>{ text }</button> }

      { type === 'main' &&
      <button onClick={ cb } className={cn(styles.buttonMain, {
        [styles.buttonMainBig] : size === 'big',
        [styles.buttonMainSmall] : size === 'small',
        [styles.buttonMainDisabled] : disabled === true
      })}
      disabled={ disabled }>{ text }</button> }

      { type === 'text' &&
      <button onClick={ cb } className={cn(styles.buttonText)} disabled={ disabled }>{ text }</button> }
    </>
  );
};
