import { useState } from 'react';
import Modal from './components/Modal';
import './App.css'

type TStep = 'start' | 'fired' | 'smile';

export function App() {
  const [step, setStep] = useState<TStep>('start');

  return (
    <div className='app'>
      {step === 'start' && (
        <button onClick={() => setStep('fired')}>Хочу повышения зарплаты</button>
      )}
      {step === 'fired' && (
        <Modal
          // подключаем пропс onClose для модалки - что делать при нажатии escape
          // в нашем случае - возвращяться на стартовый экран, который определяется стейтом 'start'
          onClose={() => setStep('start')}
          footer={
            <div className='button-block'>
              <button onClick={() => setStep('start')}>Вернуться в начало</button>
              <button onClick={() => setStep('smile')}>Я согласен!</button>
            </div>
          }
        >
          <p>Вы уволены!</p>
        </Modal>
      )}
      {step === 'smile' && (
        <div className='block'>
          <div style={{ fontSize: '100px' }} onClick={() => setStep('start')}>😄</div>
          <button onClick={() => setStep('start')}>Выход</button>
        </div>
      )}
    </div>
  )
}

export default App;