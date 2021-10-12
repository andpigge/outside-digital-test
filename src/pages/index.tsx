import type { NextPage } from 'next';

// Компоненты
import { Button } from '../components/ui/button';
import { Tags } from '../components/ui/tags';
import { Input } from '../components/ui/input';
import { Checkbox } from '../components/ui/checkbox';

const Home: NextPage = () => {
  return (
    <main style={{ /* backgroundColor: 'grey' */ }}>
      {/* <Button text={ 'Кнопка' } type={ 'button' } size={ 'big' } />
      <Button text={ 'Кнопка' } type={ 'button' } size={ 'small' } />
      <Button text={ 'Кнопка' } type={ 'text' } />
      <Button text={ 'Кнопка' } type={ 'main' } />
      <Tags text={ '32 000 ₽ 5 лет 5 мес.' } /> */}
      {/* <Input title={ 'Ваша зарплата в месяц' } 
      type={ 'text' } placeholder={ 'Введите данные' } 
      textError={ 'Поле обязательно для заполнения' } /> */}
      {/* <Checkbox disabled={ true } /> */}
    </main>
  )
}

export default Home;
