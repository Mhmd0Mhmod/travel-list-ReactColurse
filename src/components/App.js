import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Status from "./Status.js";
import { useState } from "react";
function App() {
  let [items, setItems] = useState([]);
  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }
  function handleDeleteList() {
    const confirmation = window.confirm("Are you sure you want to delete all items");
    if (confirmation) setItems([]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((el) => el.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
  }
  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList items={items} handleDeleteItem={handleDeleteItem} handleToggleItem={handleToggleItem} handleDeleteList={handleDeleteList} />
      <Status items={items} />
    </div>
  );
}
export default App;
