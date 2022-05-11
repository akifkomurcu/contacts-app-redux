import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/ContactSlice";
import { Link } from "react-router-dom";

function Item({ item }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    if (
      window.confirm(
        `${item.name} isimli kişiyi silmek istediğinize emin misiniz?`
      )
    ) {
      dispatch(deleteContact(id));
    }
  };
  return (
    <>
      <li className="ItemsLi">
        <span>{item.name}</span>
        <span>{item.phone_number}</span>
        <div className="DeleteEditBtns">
          <span>
            <Link to={`/edit/${item.id}`}>Edit</Link>
          </span>
          <span className="deleteBtn" onClick={() => handleDelete(item.id)}>
            X
          </span>
        </div>
      </li>
      <hr className="line" />
    </>
  );
}

export default Item;
