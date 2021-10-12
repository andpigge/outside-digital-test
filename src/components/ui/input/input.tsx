import React, { FC } from 'react';
import cn from 'classnames';

import styles from './input.module.css';

interface IInputProps {
  title: string
  type: string
  placeholder: string
  textError?: string
}

export const Input:FC<IInputProps> = ({ title, type, placeholder, textError }):JSX.Element => {

  return (
    <label>
      <p className={ cn(styles.text) }>
        { title }
      </p>
      <input type={ type } placeholder={ placeholder } className={ cn(styles.input, styles.inputError) } />
      { textError && <p className={ cn(styles.textError) }>{ textError }</p> }
    </label>
  );
};
