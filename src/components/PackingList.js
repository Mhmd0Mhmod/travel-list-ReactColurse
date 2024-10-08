import { useState } from "react";
import Item from "./Item.js";
function PackignList({ items, handleDeleteItem, handleToggleItem ,handleDeleteList}) {
  let [sortBy , setSortBy]=useState('input');
  let sortedItems ;
  if(sortBy==='input')sortedItems=items;
  if(sortBy==='description')sortedItems=items.slice().sort((a,b)=>a.description.localeCompare(b.description));
  if(sortBy==='packed')sortedItems=items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} key={item.id} handleDeleteItem={handleDeleteItem} handleToggleItem={handleToggleItem} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by input description</option>
          <option value="packed">Sort by input packed status</option>
        </select>
        <button onClick={handleDeleteList}>Clear list</button>
      </div>
    </div>
  );
}
export default PackignList;
