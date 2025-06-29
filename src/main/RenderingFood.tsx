import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

interface CuisineData {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

interface FoodProps {
  foodCategory: string;
}

const RenderingFood: React.FC<FoodProps> = ({ foodCategory }) => {
  const [CuisineData, setCuisineData] = useState<CuisineData[]>([]);
  const API = "https://www.themealdb.com/api/json/v1/1/categories.php";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);
        // // Testing
        // console.log(response);
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
    (Item) => foodCategory === "All Type" || Item.strCategory === foodCategory
  );

  // rendering
  return (
    <Stack
      component={"main"}
      sx={{
        gridArea: "main",
        flexDirection: "row",
        flexWrap: "wrap",
        marginBlock: "5rem",
        gap: "3rem",
      }}
    >
      {filterData.map((Item) => (
        <Box key={Item.idCategory}>
          {/* <Stack> */}
          <Box sx={{ minWidth: "18rem" }}>
            <img
              src={Item.strCategoryThumb}
              alt="This is Cuisine Food"
              style={{ width: "10rem" }}
            />

            <Typography>{Item.strCategory}</Typography>
          </Box>
          {/* </Stack> */}
        </Box>
      ))}
    </Stack>
  );
};

export default RenderingFood;
