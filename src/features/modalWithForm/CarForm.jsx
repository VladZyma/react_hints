function CarForm({ onCloseModal }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Car has been created");
    onCloseModal?.();
  }

  return (
    <form>
      <label>
        Brand:
        <input type="text" />
      </label>
      <label>
        Price:
        <input type="text" />
      </label>
      <label>
        Year:
        <input type="text" />
      </label>
      <button type="button" onClick={() => onCloseModal?.()}>
        CANCEL
      </button>
      <button onClick={handleSubmit}>CREATE</button>
    </form>
  );
}

export default CarForm;
