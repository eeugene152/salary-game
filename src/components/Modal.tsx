import type { ReactElement, ReactNode } from 'react';

type TModalProps = {
  children: ReactNode;
  footer: ReactNode;
}

function Modal ({ children, footer }: TModalProps): ReactElement {
  return (
    <div className='overlay'>
      {children}
      {footer}
    </div>
  )
}

export default Modal;