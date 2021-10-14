import React, { FC } from 'react';
import cn from 'classnames';

import styles from './list-sum.module.css';

interface IFormCalculateProps {
  sumYear: string[]
}

// Компоненты
import { Checkbox } from '../../../ui/checkbox';

export const ListSum:FC<IFormCalculateProps> = ({ sumYear }):JSX.Element => {

  const caseWords = ['в 1-ый год', 'во 2-ой год', 'в 3-ий год', 'в 4-ый год', 'в 5-ый год', 'в 6-ой год',
  'в 7-ой год', 'во 8-ой год', 'в 9-ый год', 'в 10-ый год', 'в 11-ый год', 'в 12-ый год'];

  return (
    <>
      <p>Итого можете внести в качестве досрочных:</p>
        <ul className={ cn(styles.list) }>
          { 
            sumYear.map((item, i) => {
              return <li className={ cn(styles.item) } key={i}>
                <Checkbox item={ item }>
                  <p className={ cn(styles.textList) }>
                    {`${item} рублей `}
                    <span className={ cn(styles.textSpecial) }>{ caseWords[i] }</span>
                  </p>
                </Checkbox>
              </li>
            })
          }
        </ul>
    </>
  );
}
