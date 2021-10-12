import React, { FC } from 'react';
import cn from 'classnames';

import styles from './checkbox.module.css';

interface ICheckboxProps {
  disabled?: true
}

export const Checkbox:FC<ICheckboxProps> = ({ disabled }):JSX.Element => {
  return (
    <label>
      <input type='checkbox' className={ cn(styles.checkbox) } />
      <span className={ cn(styles.checkboxItem, {
        [styles.disabled]: disabled
      })}></span>
    </label>
  );
};
