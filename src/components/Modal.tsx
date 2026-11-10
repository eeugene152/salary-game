import type { ReactElement, ReactNode } from 'react';
import './Modal.css'
import { useEffect } from 'react';

type TModalProps = {
  children: ReactNode;
  footer: ReactNode;
  onClose: () => void;
}

function Modal ({ children, footer, onClose }: TModalProps): ReactElement {
  // Запускаем эффект один раз при появлении модального окна на экране
  useEffect(() => {
    // функция обработчик нажатия клавиши (через встроенный keyboardevent)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose(); // вызываем функцию закрытия от родителя
      }
    };
    
    // Вешаем слушатель на весь документ браузера
    document.addEventListener('keydown', handleKeyDown);
    // обязательно функция очистки слушателя, чтобы он не продолжал работать после закрытия модалки
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [onClose]); // типа хороший тон указать onClose  взависимостях

  return (
    // вешаем закрытие на клик по оверлею
    <div className='overlay' onClick={onClose}>
      {/* // чтоб клик по карточке не срабатывал делаем обработчик клика-стоп.пропагейшн  */}
      <div className='modal-window' onClick={(e) => e.stopPropagation()}>
        {children}
        {footer}
      </div>
    </div>
  )
}

export default Modal;