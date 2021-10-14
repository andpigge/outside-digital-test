import React, { FC } from 'react';
import cn from 'classnames';

import styles from './form-calculate.module.css';

interface IFormCalculateProps {
  calculate: (e: React.FormEvent<HTMLFormElement>) => void
  addSalaryValue: (value: string) => void
  inputValue: string
}

// Компоненты
import { Button } from '../../../ui/button';
import { Input } from '../../../ui/input';

export const FormCalculate:FC<IFormCalculateProps> = ({ calculate, addSalaryValue, inputValue }):JSX.Element => {
  const cbInput = (value: string) => {
    const checkNumber = /^\d*$/;
    if (checkNumber.test(value)) {
      addSalaryValue(value);
    }
  };

  return (
    <form onSubmit={ calculate } name='calculate' className={ cn(styles.calculate) }>
      <div className={ cn(styles.container) }>
        <Input 
          title={ 'Ваша зарплата в месяц' } 
          placeholder={ 'Введите данные' } 
          cb={ cbInput } 
          value={ inputValue }
          textError={ Number(inputValue) < 30000 && 'Число должно быть больше 30 000' }
        />
      </div>
      <Button text={ 'Рассчитать' } type={ 'text' } disabled={ Number(inputValue) < 30000 } />
    </form>
  );
}
