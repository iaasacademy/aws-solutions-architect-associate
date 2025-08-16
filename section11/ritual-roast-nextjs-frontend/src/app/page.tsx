"use client";
import OurChoices from "./components/OurChoices";
import RecipeTable from "./components/RecipeTable";
import RecipeForm from "./components/RecipeForm";
import Banner from "./components/Banner";
import CountdownTimer from "./components/CountdownTimer";
// import { RecipeTables } from "./components/RecipeTable";


export default function Home() {
  return (
    <main>
      <Banner />
      <CountdownTimer />
      <RecipeForm />
      <RecipeTable />
      <OurChoices />  
      {/* <RecipeTables /> */}
    </main>
  );
}

