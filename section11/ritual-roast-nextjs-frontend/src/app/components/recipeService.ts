import { useEffect, useState } from "react";

export const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch("/api/get_recipe");
        const data = await res.json();
        setRecipes(data);
      } catch (err) {
        console.error("Error fetching data from Flask:", err);
      }
    };

    fetchRecipes();
  }, []);

  return recipes;
};
