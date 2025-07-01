import React, { useEffect, useState } from "react";
import FoodList from "./FoodList";

interface CuisineData {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

interface FoodProps {
  foodCategory: string;
  setFoodList:React.Dispatch<React.SetStateAction<string>>
}

const RenderingFood: React.FC<FoodProps> = ({ foodCategory,setFoodList }) => {
  const [CuisineData, setCuisineData] = useState<CuisineData[]>([]);
  const API = "https://www.themealdb.com/api/json/v1/1/categories.php";

  const [InputState, setInputState] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);

        if (!response.ok) {
          throw new Error(
            `Data is failing, ${response.status} ${response.statusText}`
          );
        }
        const responseData = await response.json();
        setCuisineData(responseData.categories);
        console.log(CuisineData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const filterData = CuisineData.filter(
    (Item) =>
      foodCategory === "All Type" ||
    // Input State ში რეალურად ინახება,Searchში აკრეფილი ნებისმიერი ტექსტი
      Item.strCategory.toLowerCase() === InputState.toLowerCase() ||
      Item.strCategory === foodCategory
  ).slice(0, 10);


  return (
    // Input State მენეჯემნტი გავაკეთეთ მშობელი კომპონენტიდან :), გადავეცით სთეითი და სეთ სთეით ი
    <FoodList
      filterData={filterData}
      setInputState={setInputState}
      InputState={InputState}
      setFoodList={setFoodList}
    />
  );
};

export default RenderingFood;
