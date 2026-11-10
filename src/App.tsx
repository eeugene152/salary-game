import { useState } from 'react';
import Modal from './components/Modal';

type TStep = 'start' | 'fired' | 'smile';

export function App() {
  const [step, setStep] = useState<TStep>('start');

  return (
    <div className='app'>
      {step === 'start' && (
        <button onClick={() => setStep('fired')}>Хочу повышения зарплаты</button>
      )}
      {step === 'fired' && (
        <div className='block'>
          <p>Вы уволены!</p>
          <button onClick={() => setStep('start')}>Вернуться в начало</button>
          <button onClick={() => setStep('smile')}>Я согласен!</button>
        </div>
        // <Modal
        //   footer={
        //     <div>
        //       <button onClick={() => setStep('start')}>Вернуться в начало</button>
        //       <button onClick={() => setStep('smile')}>Я согласен!</button>
        //     </div>
        //   }
        // >
        //   <p>Вы уволены!</p>
        // </Modal>
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