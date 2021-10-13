import React, { FC } from 'react';
import cn from 'classnames';

import styles from './tags.module.css';

interface ITagsProps {
  textList: string[]
  cb: (value: string) => void
}

export const Tags:FC<ITagsProps> = ({ textList, cb }):JSX.Element => {

  const handlerClick = (e: React.MouseEvent<HTMLInputElement>) => {
    cb(e.currentTarget.value);
  };

  return (
    <>
      {
        textList.map((text, i) => {
          return ( 
            <label className={ cn(styles.container) } key={i }>
              <input 
                type='radio' 
                className={ cn(styles.radio) } 
                name='radioTags' 
                value={ text } 
                onClick={handlerClick}
              />
              <p  className={ cn(styles.tags) }>
                { text }
              </p>
            </label>
        )})
      }
    </>
  );
};
