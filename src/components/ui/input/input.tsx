import React, { FC } from 'react';
import cn from 'classnames';

import styles from './input.module.css';

interface IInputProps {
  title: string
  placeholder: string
  cb: (value: string) => void
  value: string
  type?: 'text' | 'password' | 'email'
  textError?: string | false
}

export const Input:FC<IInputProps> = ({ title, placeholder, cb, value, type, textError }):JSX.Element => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target.value);
    const reg = /^\d*$/;
    if (reg.test(value)) {
      cb(value);
    }
    cb(value);
  };

  return (
    <label>
      <p className={ cn(styles.text) }>
        { title }
      </p>
      <input 
        type={ type } 
        placeholder={ placeholder } 
        className={ cn(styles.input) }
        onChange={ handleInput }
        value={ value }
      />
      { textError && <p className={ cn(styles.textError) }>{ textError }</p> }
    </label>
  );
};
