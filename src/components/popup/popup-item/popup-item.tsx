import React, { FC, useCallback, useState } from 'react';
import cn from 'classnames';

import styles from './popup-item.module.css';

// Компоненты
import { Button } from '../../ui/button';
import { FormCalculate } from './form-calculate';
import { ListSum } from './list-sum';
import { ListTags } from './list-tags';

interface IPopupProps {
  cb: () => void
}

export const PopupItem:FC<IPopupProps> = ({ cb }):JSX.Element => {
  const [sumYear, setSumYear] = useState<string[]>([]);
  const [ inputValue, setInputValue ] = useState('');

  const calculate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const max = 260000;
    const sumYear = (Number(inputValue) * 12) * 0.13;

    setSumYear([]);

    for (let i = 0; i < Math.floor(max / sumYear); i++) {
      setSumYear((state: string[]) => {
        const newArr = state.slice(0);
        newArr.push((Math.ceil(sumYear)).toString());
        return newArr;
      });
    }
    setSumYear((state: string[]) => {
      const newArr = state.slice(0);
      newArr.push( (max % Math.ceil(sumYear)).toString() );
      return newArr;
    });
  };

  const handlerСalculate = () => {
    console.log(1)
  };

  const closePopup = useCallback(() => {
    cb();
  }, [ cb ]);

  const addSalaryValue = (value: string) => {
    setInputValue(value);
  };

  return (
    <div className={ cn(styles.popup) }>
      <div className={ cn(styles.popupContainer) }>
        <button type='button' className={ cn(styles.close) } onClick={ closePopup }></button>
        <h1 className={ cn(styles.title) }>
          Налоговый вычет
        </h1>
        <p className={ cn(styles.desc) }>
          Используйте налоговый вычет чтобы погасить ипотеку досрочно. 
          Размер налогового вычета составляет не более 13% от своего официального годового дохода.
        </p>

        <FormCalculate calculate={ calculate } addSalaryValue={ addSalaryValue } inputValue={ inputValue } />

        { sumYear.length > 0 && <ListSum sumYear={ sumYear } /> }

        <ListTags />

        <div className={ cn(styles.containerButton) }>
          <Button 
            text={ 'Добавить' } 
            type={ 'button' } 
            cb={ handlerСalculate } 
            size={ 'big' } 
            disabled={ Number(inputValue) < 30000 } 
          />
        </div>
      </div>
    </div>
  );
};
