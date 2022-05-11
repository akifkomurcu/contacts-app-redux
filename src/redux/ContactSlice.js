import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdapter = createEntityAdapter();
const initialState = contactAdapter.getInitialState();

export const contactSelectors = contactAdapter.getSelectors(
  (state) => state.contacts
);

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    //burada normalde data action'a gelir payloaddan alır ve state'e yazardık. Artık gelen data entities'e atılıyor ve oradan daha kolay alabiliyorsun. AddOne yazarak kolayca ekleyebiliyorsun.
    //tekli eklemek için
    addContact: contactAdapter.addOne,
    //çoklu ekleme için
    addContacts: contactAdapter.addMany,
    //tekli silme için
    deleteContact: contactAdapter.removeOne,
    //çoklu silme için removeMany. removeAll ile hepsini siler.
    deleteContacts: contactAdapter.removeAll,
    //tekli güncelleme
    updateContact: contactAdapter.updateOne,
  },
});
export const {
  addContact,
  addContacts,
  deleteContact,
  deleteContacts,
  updateContact,
} = contactSlice.actions;
export default contactSlice.reducer;
