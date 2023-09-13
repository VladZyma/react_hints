import Counter from "./features/compound-component/Counter";
import Menu from "./features/compound-component/MenuAccordion";
import Toggle from "./features/compound-component/Toggle";

function App() {
  return (
    <div>
      <div>
        <h3>Counter</h3>
        <Counter>
          <Counter.DecreaseButton icon="-" />
          <Counter.ShowValue />
          <Counter.IncreaseButton icon="+" />
        </Counter>
        <br />
        <Counter>
          <Counter.DecreaseButton icon="⬇" />
          <Counter.ShowValue />
          <Counter.IncreaseButton icon="⬆" />
        </Counter>
      </div>
      <hr />
      <div>
        <h3>Toggle</h3>
        <Toggle>
          <Toggle.Button />
          <Toggle.Label />
        </Toggle>
        <br />
        <Toggle>
          <Toggle.Label />
          <Toggle.Button type="rounded" />
        </Toggle>
      </div>
      <hr />
      <div>
        <h3>Menu accordion</h3>
        <Menu>
          <Menu.Group name="Movies">
            <Menu.Item to="/actions">Actions</Menu.Item>
            <Menu.Item to="/horrors">Horrors</Menu.Item>
            <Menu.Item to="/drama">Drama</Menu.Item>
          </Menu.Group>
          <Menu.Group name="Serials">
            <Menu.Item to="/actions">Actions</Menu.Item>
            <Menu.Item to="/horrors">Horrors</Menu.Item>
            <Menu.Item to="/drama">Drama</Menu.Item>
          </Menu.Group>
          <Menu.Group name="Info">
            <Menu.Item to="/address">Address</Menu.Item>
            <Menu.Item to="/faq">FAQ</Menu.Item>
            <Menu.Item to="/about">About us</Menu.Item>
          </Menu.Group>
        </Menu>
      </div>
    </div>
  );
}

export default App;
