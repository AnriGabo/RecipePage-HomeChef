import { useState } from "react";
import "./App.css";
import Header from "./header/Header";
import Category from "./sidebar/Category";

export default function App() {
// state managment with props

  const [foodList, setFoodList] = useState<string>("");
console.log(foodList);

  return (
    <div className="All-Wrapper">
      <Header />
      <Category setFoodList={setFoodList}/>
      {/* stateგავაგზავნით აქ */}
    </div>
  )
}
