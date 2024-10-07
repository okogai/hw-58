import Backdrop from '../Backdrop/Backdrop.tsx';
import React from 'react';
import { ButtonConfig } from '../../../types';


interface Props extends React.PropsWithChildren{
  show: boolean;
  title: string;
  buttons: ButtonConfig[];
  closeModal: () => void;
}

const Modal: React.FC<Props> = ({show, title = 'Modal title', children, closeModal, buttons}) => {;

  return (
    <>
      <Backdrop show={show} onClick={closeModal}/>
      <div className="modal show" style={{display: show ? 'block' : 'none', width: "500px", position: 'fixed', top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
              <button type="button" className="btn-close" onClick={closeModal}></button>
            </div>
            <div className="p-2 text-start">
              {children}
            </div>
            <div className="modal-footer">
              <div className="modal-footer">
                {buttons.map((button, index) => (
                  <button
                    key={index}
                    className={`btn btn-${button.type}`}
                    onClick={button.onClick}
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Modal;


















