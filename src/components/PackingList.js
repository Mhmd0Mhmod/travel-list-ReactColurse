import Item from "./Item.js";
function PackignList({ items, handleDeleteItem, handleToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} handleDeleteItem={handleDeleteItem} handleToggleItem={handleToggleItem} />
        ))}
      </ul>
    </div>
  );
}
export default PackignList;
