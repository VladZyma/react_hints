function UserForm({ onCloseModal }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("User has been registered");
    onCloseModal?.();
  }

  return (
    <form>
      <label>
        User name:
        <input type="text" />
      </label>{" "}
      <label>
        Email:
        <input type="text" />
      </label>{" "}
      <label>
        Password:
        <input type="text" />
      </label>
      <button type="button" onClick={() => onCloseModal?.()}>
        CANCEL
      </button>
      <button onClick={handleSubmit}>REGISTER</button>
    </form>
  );
}

export default UserForm;
