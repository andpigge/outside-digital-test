import React, { FC, useState, useRef } from 'react';
import cn from 'classnames';

import styles from './checkbox.module.css';

interface ICheckboxProps {
  item: string
  disabled?: true
}

export const Checkbox:FC<ICheckboxProps> = ({ item, children, disabled }):JSX.Element => {
  const checkboxRef = useRef(null);
  const [ activeCheckbox, setActiveCheckbox ] = useState(false);

  const handlerClick = () => {
    setActiveCheckbox(!activeCheckbox);
  };

  return (
    <div className={ cn(styles.container) } onClick={ handlerClick }>
      <input type='checkbox' className={ cn(styles.checkbox) } ref={ checkboxRef } value={ item } />
      <span className={ cn(styles.checkboxItem, {
        [styles.disabled]: disabled,
        [styles.active]: activeCheckbox
      })}></span>
      { children }
    </div>
  );
};
