import "./App.css";
import Modal from "./components/UI/Modal/Modal.tsx";
import { useState } from "react";
import Alert from "./components/UI/Alert/Alert.tsx";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState(true);

  const buttons = [
    {
      type: "primary",
      label: "Continue",
      onClick: () => alert("clicked continue"),
    },
    { type: "danger", label: "Close", onClick: () => closeModalWindow() },
    {
      type: "secondary",
      label: "Cancel",
      onClick: () => alert("You clicked cancel!"),
    },
  ];

  const closeModalWindow = () => {
    setShowModal(!showModal);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <Modal
        show={showModal}
        title={"Some kinda modal title"}
        closeModal={closeModalWindow}
        buttons={buttons}
      >
        This is modal content
      </Modal>
      <button
        className="btn btn-primary"
        onClick={() => setShowModal(!showModal)}
      >
        Open modal
      </button>

      <div className="container mt-5">
        <h1 className="mb-5">Alert Component</h1>

        {showAlert && (
          <Alert type="warning" onDismiss={closeAlert}>
            This is a warning type alert
          </Alert>
        )}

        <Alert type="success">This is a success type alert</Alert>
      </div>
    </>
  );
};

export default App;
