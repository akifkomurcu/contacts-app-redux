import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/ContactSlice";
import { useNavigate } from "react-router-dom";
function EditForm({ contact }) {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.phone_number);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) {
      return false;
    }
    dispatch(
      updateContact({
        id: contact.id,
        //değişecek değerleri buraya yazıyoruz.
        changes: {
          name,
          phone_number: number,
        },
      })
    );
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="NameInputFormDiv">
        <input
          className="NameInputForm"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
      </div>
      <div className="PhoneInputFormDiv">
        <input
          className="PhoneInputForm"
          placeholder="Phone Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div className="btn">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditForm;
