import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditForm from "./EditForm";
import { useSelector } from "react-redux";
import { contactSelectors } from "../../redux/ContactSlice";
function Edit() {
  //bu ismin item.jsx'deki yazdığımız id ismiyle aynı olmasını unutma.
  const { id } = useParams();
  const contact = useSelector((state) =>
    contactSelectors.selectById(state, id)
  );
  const navigate = useNavigate();
  if (!contact) {
    return navigate("/");
  }
  return (
    <div>
      <h1>Edit</h1>
      <EditForm contact={contact} />
    </div>
  );
}

export default Edit;
