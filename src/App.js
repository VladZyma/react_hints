//Modal with form
import Modal from "./features/modalWithForm/Modal";
import UserForm from "./features/modalWithForm/UserForm";
import CarForm from "./features/modalWithForm/CarForm";
import Button from "./features/modalWithForm/Button";
//======================================================

function App() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="user-form">
          <Button>REGISTER USER</Button>
        </Modal.Open>
        <Modal.Window name="user-form">
          <UserForm />
        </Modal.Window>
      </Modal>
      <Modal>
        <Modal.Open opens="car-form">
          <Button>CREATE CAR</Button>
        </Modal.Open>
        <Modal.Window name="car-form">
          <CarForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default App;
