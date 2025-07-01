import { useState } from "react";
import "./App.css";
import Header from "./header/Header";
import Category from "./sidebar/Category";
import RenderingFood from "./main/RenderingFood";

export default function App() {
  const [foodList, setFoodList] = useState<string>("");

  return (
    <div className="All-Wrapper">
      <Header />
      <Category setFoodList={setFoodList} />
      <RenderingFood foodCategory={foodList}  setFoodList={setFoodList}/>
    </div>
  );
}
