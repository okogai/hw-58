import "./App.css";
import Modal from './components/UI/Modal/Modal.tsx';
import { useState } from 'react';

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const buttons = [
    {type: 'primary', label: 'Continue', onClick: () => alert('clicked continue')},
    {type: 'danger', label: 'Close', onClick: () => closeModalWindow()},
    { type: 'secondary', label: 'Cancel', onClick: () => alert('You clicked cancel!') },
  ];

  const closeModalWindow = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Modal show={showModal} title={'Some kinda modal title'} closeModal={closeModalWindow} buttons={buttons}>This is modal content</Modal>
       <button className="btn btn-primary" onClick={() => setShowModal(!showModal)}>Open modal</button>
    </>
  );
};

export default App;
