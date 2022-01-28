import React, { useState } from "react";
import Post from "../../Post";

const SelectCategory = () => {
  const [Category, setCategory] = useState("Будівництво");

  function handleSelectChangeCategory(event) {
    setCategory(event.target.value);
  }
  Post.office.category = Category;
  return (
    <div>
      <form>
        <select
          value={Category}
          onChange={handleSelectChangeCategory}
          className="CategSelectPost"
        >
          <option value="Проектирование">Проектирование</option>
          <option value="Ремонт квартир">Ремонт квартир</option>
          <option value="Строительство">Строительство</option>
          <option value="Дизайн интерьера">Дизайн интерьера</option>
        </select>
      </form>
    </div>
  );
};

export default SelectCategory;
