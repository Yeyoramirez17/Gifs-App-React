import { useState } from "react";

import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // setCategories([ newCategory, ...categories ]);
    setCategories((cat) => [ newCategory, ...cat ]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory
        //setCategories={ setCategories }
        onNewCategory={(value) => onAddCategory(value)}
      />
      {/* Gifs List */}
      {categories.map((category, index) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
