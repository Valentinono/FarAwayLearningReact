import React, { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onToggleItem ,onClearList}) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "desc")
    sortedItems = items.slice().sort((a, b) => a.desc.localeCompare(b.desc));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="desc"> Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
};

// const Item = ({ item, onDeleteItem, onToggleItem }) => {
//   return (
//     <li>
//       <input
//         type="checkbox"
//         value={item.packed}
//         onChange={() => {
//           onToggleItem(item.id);
//         }}
//       />
//       <span style={item.packed ? { textDecoration: "line-through" } : {}}>
//         {item.quantity} {item.desc}
//       </span>
//       <button onClick={() => onDeleteItem(item.id)}>❌</button>
//     </li>
//   );
// };

export default PackingList;
