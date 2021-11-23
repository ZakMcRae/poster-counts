function EditItemForm(props) {
  const { price, note } = props.posterInfo;
  const { setPosterInfo, toggleEditFormStatus } = props;

  const submitEditForm = (e) => {
    e.preventDefault();
    setPosterInfo((prevPosterInfo) => {
      return {
        ...prevPosterInfo,
        price: e.target[0].value,
        note: e.target[1].value,
      };
    });
    toggleEditFormStatus();
  };

  return (
    <div className="edit-item-pop-up">
      <div className="edit-item-arrow-up"></div>
      <div className="edit-form">
        <p>Edit Item</p>
        <form action="#" onSubmit={submitEditForm}>
          <label htmlFor="price">Price</label>
          <input
            autoFocus
            className="price-input"
            type="text"
            name="price"
            defaultValue={price}
          />
          <label htmlFor="note">Note</label>
          <textarea
            className="note-input"
            type="text"
            name="note"
            defaultValue={note}
            rows="4"
          />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}

export default EditItemForm;
