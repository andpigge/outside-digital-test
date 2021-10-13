import React, { FC, useState, useCallback } from 'react';
import cn from 'classnames';

import styles from './popup.module.css';

// Компоненты
import { Button } from '../ui/button';
import { PopupItem } from './popup-item/popup-item';

interface IPopupProps {

}

export const Popup:FC = ():JSX.Element => {
  const [ popupActive, setPopupActive ] = useState(false);

  const openPopup = useCallback(() => {
    setPopupActive(true);
  }, [ popupActive ]);

  const cbButton = useCallback(() => {
    setPopupActive(false);
  }, [ popupActive ]);

  return (
    <>
      <section className={ cn(styles.container) }>
        <Button text={ 'Налоговый вычет' } type={ 'main' } cb={ openPopup } />
      </section>
      { popupActive && <PopupItem cb={ cbButton } /> }
    </>
  );
};
