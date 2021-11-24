import { useSelector, useDispatch } from "react-redux";
import { setNote, setPrice } from "../redux/poster";

function EditItemForm(props) {
  const dispatch = useDispatch();

  // get poster info from redux store
  const { price, note } = useSelector((state) => state.poster);

  const { toggleEditFormStatus } = props;

  const submitEditForm = (e) => {
    e.preventDefault();

    // set poster info in redux store
    dispatch(setPrice(e.target[0].value));
    dispatch(setNote(e.target[1].value));

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
