"use client";
import React from "react";
import { useRecipes } from "./recipeService";


// const recipeData = [
//   {
//     name: "Rajesh Daswani",
//     recipe: "Easy chocolate molten cakes",
//     ingredients: [
//       "100g butter, plus extra to grease",
//       "100g dark chocolate, chopped",
//       "150g light brown soft sugar",
//       "3 large eggs",
//       "½ tsp vanilla extract",
//       "50g plain flour",
//       "Single cream, to serve",
//     ],
//     description: {
//       main: "Bake an impressive dinner party dessert with minimum fuss - these chocolate puddings, also known as chocolate fondant or lava cake, have a lovely gooey centre.",
//       nutrition:
//         "kcal - 391, fat - 24g, saturates - 14g, carbs - 36g, sugars - 28g, fibre - 2g, protein - 6g, salt - 0.5g",
//     },
//   },
//   {
//     name: "Sridhar Natarajan",
//     recipe: "Roasted courgette flatbreads with fennel seeds",
//     ingredients: [
//       "1 tsp fennel seeds",
//       "¼-½ tsp chilli flakes, to taste",
//       "½ tsp ground cumin",
//       "½ tsp ground coriander",
//       "2 tbsp olive oil",
//       "1 courgette or summer squash, cut into chunky half-moons",
//       "2 latbreads",
//       "4 tbsp thick Greek yogurt",
//       "2 tbsp pomegranate seeds",
//       "50g feta, crumbled",
//       "Small handful of coriander leaves",
//     ],
//     description: {
//       main: "Use courgettes or summer squash to make these flatbreads. Spread yogurt over the top, then pop on the roasted squash, pomegranate seeds and feta.",
//       nutrition:
//         "kcal - 507, fat - 27g, saturates - 11g, carbs - 46g, sugars - 9g, fibre - 5g, protein - 18g, salt - 0.9g",
//     },
//   },
//   {
//     name: "Doug Ruiz",
//     recipe: "Easy chocolate molten cakes",
//     ingredients: [
//       "100g butter, plus extra to grease",
//       "100g dark chocolate, chopped",
//       "150g light brown soft sugar",
//       "3 large eggs",
//       "½ tsp vanilla extract",
//       "50g plain flour",
//       "Single cream, to serve",
//     ],
//     description: {
//       main: "Bake an impressive dinner party dessert with minimum fuss - these chocolate puddings, also known as chocolate fondant or lava cake, have a lovely gooey centre.",
//       nutrition:
//         "kcal - 391, fat - 24g, saturates - 14g, carbs - 36g, sugars - 28g, fibre - 2g, protein - 6g, salt - 0.5g",
//     },
//   },
//   {
//     name: "Arabella Daisy",
//     recipe: "Roasted courgette flatbreads with fennel seeds",
//     ingredients: [
//       "1 tsp fennel seeds",
//       "¼-½ tsp chilli flakes, to taste",
//       "½ tsp ground cumin",
//       "½ tsp ground coriander",
//       "2 tbsp olive oil",
//       "1 courgette or summer squash, cut into chunky half-moons",
//       "2 latbreads",
//       "4 tbsp thick Greek yogurt",
//       "2 tbsp pomegranate seeds",
//       "50g feta, crumbled",
//       "Small handful of coriander leaves",
//     ],
//     description: {
//       main: "Use courgettes or summer squash to make these flatbreads. Spread yogurt over the top, then pop on the roasted squash, pomegranate seeds and feta.",
//       nutrition:
//         "kcal - 507, fat - 27g, saturates - 11g, carbs - 46g, sugars - 9g, fibre - 5g, protein - 18g, salt - 0.9g",
//     },
//   },
// ];

const RecipeTable = () => {
    
  
  // ✅ Use the custom hook to fetch recipes
  const recipes = useRecipes();

  // ✅ You can assign to another variable inside the component
  const recipeData = recipes;

  return (
    <div
      className="w-full"
      style={{ fontFamily: "var(--font-montserrat-alternates)" }}
    >
      {/* Desktop and Tablet View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white border-collapse">
          <thead className="bg-[color:var(--brown-dark)] text-white">
            <tr>
              <th className="py-4 px-4 lg:px-8 text-left text-sm lg:text-base font-semibold"></th>
              <th className="py-4 px-4 lg:px-8 text-left text-sm lg:text-base font-semibold"></th>
              <th className="py-4 px-4 lg:px-8 text-left text-sm lg:text-base font-semibold"></th>
              <th className="py-4 px-4 lg:px-8 text-left text-sm lg:text-base font-semibold  md:hidden"></th>
              <th className="py-4 px-4 lg:px-8 text-left text-sm lg:text-base font-semibold  md:hidden"></th>
              <th className="py-4 px-4 lg:px-8 text-left text-sm lg:text-base font-semibold  md:hidden"></th>
              <th className="py-4 px-4 lg:px-8 text-left text-sm lg:text-base font-semibold border-r border-gray-600">
                Name
              </th>
              <th className="py-4 px-4 lg:px-8 text-left text-sm lg:text-base font-semibold border-r border-gray-600">
                Recipe
              </th>
              <th className="py-4 px-4 lg:px-8 text-left text-sm lg:text-base font-semibold border-r border-gray-600">
                Recipe Ingredients
              </th>
              <th className="py-4 px-4 lg:px-8 text-left text-sm lg:text-base font-semibold">
                Recipe Description
              </th>
              <th className="py-4 px-4 lg:px-8 text-left text-sm lg:text-base font-semibold"></th>
              <th className="py-4 px-4 lg:px-8 text-left text-sm lg:text-base font-semibold"></th>
              <th className="py-4 px-4 lg:px-8 text-left text-sm lg:text-base font-semibold"></th>
              <th className="py-4 px-4 lg:px-8 text-left text-sm lg:text-base font-semibold  md:hidden"></th>
              <th className="py-4 px-4 lg:px-8 text-left text-sm lg:text-base font-semibold  md:hidden"></th>
              <th className="py-4 px-4 lg:px-8 text-left text-sm lg:text-base font-semibold  md:hidden"></th>
            </tr>
          </thead>
          <tbody>
            {recipeData.map((item, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 ${
                  index % 2 === 0
                    ? "bg-[color:var(--table-bg-alt)]"
                    : "bg-[color:var(--table-bg)]"
                }`}
              >
                <td className="py-4 px-4 lg:px-8 text-[color:var(--brown-dark)] align-top"></td>
                <td className="py-4 px-4 lg:px-8 text-[color:var(--brown-dark)] align-top"></td>
                <td className="py-4 px-4 lg:px-8 text-[color:var(--brown-dark)] align-top"></td>
                <td className="py-4 px-4 lg:px-8 text-[color:var(--brown-dark)] align-top  md:hidden"></td>
                <td className="py-4 px-4 lg:px-8 text-[color:var(--brown-dark)] align-top  md:hidden"></td>
                <td className="py-4 px-4 lg:px-8 text-[color:var(--brown-dark)] align-top  md:hidden"></td>
                <td className="py-4 px-4 lg:px-8 font-semibold text-sm lg:text-base text-[color:var(--brown-dark)] align-top border-r border-gray-200">
                  {item.name}
                </td>
                <td className="py-4 px-4 lg:px-8 text-sm lg:text-base text-[color:var(--brown-dark)] align-top border-r border-gray-200">
                  {item.recipe}
                </td>
                <td className="py-4 px-4 lg:px-8 font-semibold text-xs lg:text-sm text-[color:var(--brown-dark)] align-top border-r border-gray-200">
                  <div className="break-words">
                    {item.ingredients.join(" / ")}
                  </div>
                </td>
                <td className="py-4 px-4 lg:px-8 text-xs lg:text-sm text-[color:var(--brown-dark)] align-top">
                  <div className="break-words">
                    <p className="font-semibold">{item.description.main}</p>
                    
                  </div>
                </td>
                <td className="py-4 px-4 lg:px-8 text-[color:var(--brown-dark)] align-top"></td>
                <td className="py-4 px-4 lg:px-8 text-[color:var(--brown-dark)] align-top"></td>
                <td className="py-4 px-4 lg:px-8 text-[color:var(--brown-dark)] align-top"></td>
                <td className="py-4 px-4 lg:px-8 text-[color:var(--brown-dark)] align-top md:hidden"></td>
                <td className="py-4 px-4 lg:px-8 text-[color:var(--brown-dark)] align-top md:hidden"></td>
                <td className="py-4 px-4 lg:px-8 text-[color:var(--brown-dark)] align-top md:hidden"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View - Card Layout */}
      <div className="md:hidden space-y-4">
        {recipeData.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border ${
              index % 2 === 0
                ? "bg-[color:var(--table-bg-alt)] border-gray-200"
                : "bg-[color:var(--table-bg)] border-gray-200"
            }`}
          >
            <div className="space-y-3">
              <div>
                <h3 className="text-sm font-semibold text-[color:var(--brown-dark)]">
                  Name
                </h3>
                <p className="text-sm text-[color:var(--brown-dark)]">
                  {item.name}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[color:var(--brown-dark)]">
                  Recipe
                </h3>
                <p className="text-sm text-[color:var(--brown-dark)]">
                  {item.recipe}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[color:var(--brown-dark)]">
                  Recipe Ingredients
                </h3>
                <p className="text-xs text-[color:var(--brown-dark)]">
                  {item.ingredients.join(" / ")}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[color:var(--brown-dark)]">
                  Recipe Description
                </h3>
                <p className="text-xs text-[color:var(--brown-dark)]">
                  {item.description.main}
                </p>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeTable;
