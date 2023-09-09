//Modal with menus (using Modal and CarForm from ModalWithForm)
import Modal from "./features/modalWithForm/Modal";
import Menus from "./features/modalWithMenus/Menus";
import CarForm from "./features/modalWithForm/CarForm.jsx";
import ConfirmDelete from "./features/modalWithMenus/ConfirmDelete";
import Button from "./features/modalWithForm/Button";
import styles from "./features/modalWithMenus/Menus.module.css";
const cars = [
  { id: 1, brand: "BMW", price: 20500, year: 2014 },
  { id: 2, brand: "Audi", price: 35700, year: 2020 },
  { id: 3, brand: "Mercedes", price: 15800, year: 2010 },
]; // data form DB
//======================================================
function App() {
  function handleDuplicate() {
    console.log("Car duplicated");
  }

  function handleDelete(id) {
    console.log(`Car with ${id} deleted`);
  }
  return (
    <div>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <div>
              <div>
                ID: {car.id}, Brand: {car.brand}, Price: ${car.price}, Year:{" "}
                {car.year}{" "}
                <div>
                  {
                    <Modal>
                      <Menus>
                        <Menus.Menu className={styles.menu}>
                          <Menus.Toggle id={car.id} />

                          <Menus.List id={car.id}>
                            <Menus.Button icon={"🧐"} onClick={handleDuplicate}>
                              Duplicate
                            </Menus.Button>

                            <Modal.Open opens="edit">
                              {/* <Menus.Button icon="➕">Edit</Menus.Button> */}
                              <Button>"➕" Edit</Button>
                            </Modal.Open>

                            <Modal.Open opens="delete">
                              {/* <Menus.Button icon="❌">Delete</Menus.Button> */}
                              <Button>"❌" Delete</Button>
                            </Modal.Open>
                          </Menus.List>

                          <Modal.Window name="edit">
                            <CarForm />
                          </Modal.Window>
                          <Modal.Window name="delete">
                            <ConfirmDelete
                              resourceName="cars"
                              onConfirm={() => handleDelete(car.id)}
                            />
                          </Modal.Window>
                        </Menus.Menu>
                      </Menus>
                    </Modal>
                  }
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
