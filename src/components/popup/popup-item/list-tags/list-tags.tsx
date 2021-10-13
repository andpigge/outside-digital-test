import React, { FC } from 'react';
import cn from 'classnames';

import styles from './list-tags.module.css';

// Компоненты
import { Tags } from '../../../ui/tags/tags';

interface IListTagsProps {
  
}

export const ListTags:FC<IListTagsProps> = ():JSX.Element => {
  const cbTags = (tags: string) => {
    console.log(tags)
  }

  return (
    <div className={ cn(styles.containerTags) }>
      <p className={ cn(styles.text) }>
          Что уменьшаем?
      </p>
      <Tags textList={['Платеж', 'Срок']} cb={ cbTags } />
    </div>
  );
};

