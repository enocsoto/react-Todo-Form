import { useState } from "react";

export const Cat = () => {
  const [cat, setCat] = useState({
    name: "Dexter",
    age: 5,
  });

  const handleClick = () => {
    setCat({ ...cat, age: cat.age + 1 });
  };

  return (
    <>
      <h2>
        {cat.name} - {cat.age}
      </h2>
      <button className="btn btn-dark mb-2" onClick={handleClick}>
        Update Year{" "}
      </button>
    </>
  );
};
