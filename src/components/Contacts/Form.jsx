import { useState } from "react";
import {
  addContact,
  addContacts,
  deleteContacts,
} from "../../redux/ContactSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { contactSelectors } from "../../redux/ContactSlice";

function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const total = useSelector(contactSelectors.selectTotal);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) return false;

    //yazdıklarımı virgülle ayırdım
    const names = name.split(",");
    //dolanıp dataya atıyorum
    const data = names.map((name) => ({
      id: nanoid(),
      name,
      phone_number: number,
    }));
    //dispatch ile redux'e gönderiyorum.Fakat addMany kısmına.
    dispatch(addContacts(data));
    setName("");
    setNumber("");
  };

  const handleDeleteAll = (id) => {
    if (window.confirm("Tüm kişileri silmek istediğinize emin misiniz?")) {
      dispatch(deleteContacts());
    }
  };

  return (
    <div>
      <div className="headerTexts">
        <h1>Contacts({total})</h1>
        {total > 0 && (
          <div className="deleteAll" onClick={handleDeleteAll}>
            Delete All
          </div>
        )}
      </div>
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
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
