import React, { useState } from "react";

const Form = ({ onAddItems }) => {
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);

  const hendleSubmit = (e) => {
    e.preventDefault();
    if (!desc) return;

    const newItem = { desc, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);
    setDesc("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={hendleSubmit}>
      <h3>Wath do you need for you trip</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item...."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
