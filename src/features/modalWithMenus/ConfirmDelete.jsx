function ConfirmDelete({ resourceName, onConfirm, onCloseModal }) {
  return (
    <div>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>
      <button onClick={() => onCloseModal?.()}>CANCEL</button>
      <button onClick={onConfirm}>DELETE</button>
    </div>
  );
}

export default ConfirmDelete;
