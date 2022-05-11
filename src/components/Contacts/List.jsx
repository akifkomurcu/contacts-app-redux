import React from "react";
import { contactSelectors } from "../../redux/ContactSlice.js";
import { useSelector } from "react-redux";
import Item from "./Item";
function List() {
  //contactSelectors.selectAll dersen array gibi geliyor. normal reduxtaki gibi
  //.total yaparsan entity içinde kaç kayıt varsa o kadar sayıyı yazar
  const contacts = useSelector(contactSelectors.selectAll);
  console.log(contacts);
  return (
    <ul className="list">
      {contacts.map((contact) => (
        <Item item={contact} key={contact.id} />
      ))}
    </ul>
  );
}

export default List;
