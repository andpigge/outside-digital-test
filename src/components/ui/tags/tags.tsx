import React, { FC } from 'react';
import cn from 'classnames';

import styles from './tags.module.css';

interface IButtonProps {
  text: string
}

export const Tags:FC<IButtonProps> = ({ text }):JSX.Element => {
  return (
    <p  className={ cn(styles.tags) }>
      { text }
    </p>
  );
};
