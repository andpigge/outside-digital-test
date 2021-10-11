import type { NextPage } from 'next';

// Компоненты
import { Button } from '../components/ui/button/button';

const Home: NextPage = () => {
  return (
    <main style={{ backgroundColor: 'black' }}>
      <Button text={ 'Кнопка' } type={ 'button' } size={ 'big' } />
      <Button text={ 'Кнопка' } type={ 'button' } size={ 'small' } />
      <Button text={ 'Кнопка' } type={ 'text' } />
      <Button text={ 'Кнопка' } type={ 'main' } />
    </main>
  )
}

export default Home;
