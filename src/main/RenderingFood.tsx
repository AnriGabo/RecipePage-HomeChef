import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface CuisineData {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

const RenderingFood = () => {
  const [CuisineData, setCuisineData] = useState<CuisineData[]>([]);
  const API = "https://www.themealdb.com/api/json/v1/1/categories.php";

  const chefsSecrets = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error(
          `Data is failing, ${response.status} ${response.statusText}`
        );
      }
      const convertToJson = await response.json();
      setCuisineData(convertToJson.categories);
      console.log(CuisineData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    chefsSecrets();
  }, []);

  const FilterData = CuisineData.filter((Item) => Item.strCategory === "Beef");
  console.log(FilterData);

  // rendering
  return (
    <Box>
      {/* მუშაობს */}
      {FilterData.map((Item) => (
        <div key={Item.idCategory}>
          <Box>
            <Typography>{Item.strCategoryDescription}</Typography>
            <img src={Item.strCategoryThumb} />
          </Box>
        </div>
      ))}
    </Box>
  );
};

export default RenderingFood;
