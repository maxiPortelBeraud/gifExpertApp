import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  const onRemoveCategory = (categoryToRemove) => {
    if (categories.length <= 1) return;
    setCategories(categories.filter((item) => item !== categoryToRemove));
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid
          key={category}
          category={category}
          onRemoveCategory={onRemoveCategory}
        />
      ))}
    </>
  );
};

export default GifExpertApp;
