import { Box, Typography } from "@mui/material";
import CustomButton, { ButtonWithImage } from "./CustomComponent";
import alltype from "../images/alltype.jpg";
import beef from "../images/Beef2.png";
import dessert from "../images/dessert2.png";
import pasta from "../images/pasta.png";
import seaFood from "../images/seaFood.png";
import starter from "../images/starter.png";
import type React from "react";

interface updateFoodList {
  setFoodList: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryInfo: React.FC<updateFoodList> = ({ setFoodList }) => {
    // ყველაფრის მასივში გაერთიანება და მერე დამაპვა

    // const 
  return (
    <Box component={"aside"} sx={{ gridArea: "sidebar" }}>
      <Box sx={{ marginInlineStart: "3rem" }}>
        <Typography variant={"h5"} component={"p"} sx={{ color: "white" }}>
          Categories
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginBlock: "1.5rem",
          marginInlineStart: "3rem",
          maxWidth: "16rem",
          gap: "1rem",
        }}
      >
        <CustomButton
          sx={{
            paddingInlineEnd: "8rem",
            "&:focus": {
              backgroundColor: "#898989",
            },
          }}
          onClick={() => setFoodList("All Type")}
        >
          <ButtonWithImage src={alltype} label="alltype food" />
          All Type
        </CustomButton>
        <CustomButton
          sx={{
            paddingInlineEnd: "9rem",
            "&:focus": {
              backgroundColor: "#898989",
            },
          }}
          onClick={() => setFoodList("Beef")}
        >
          <ButtonWithImage src={beef} label="Beef Food" />
          Beef
        </CustomButton>

        <CustomButton
          sx={{
            paddingInlineEnd: "8rem",
            "&:focus": {
              backgroundColor: "#898989",
            },
          }}
          onClick={() => setFoodList("Dessert")}
        >
          <ButtonWithImage src={dessert} label="Desert Food" />
          Dessert
        </CustomButton>
        <CustomButton
          sx={{
            paddingInlineEnd: "8rem",
            "&:focus": {
              backgroundColor: "#898989",
            },
          }}
          onClick={() => setFoodList("Seafood")}
        >
          <ButtonWithImage src={seaFood} label="SeaFood" />
          Seafood
        </CustomButton>
        <CustomButton
          sx={{
            paddingInlineEnd: "9rem",
            "&:focus": {
              backgroundColor: "#898989",
            },
          }}
          onClick={() => setFoodList("Pasta")}
        >
          <ButtonWithImage src={pasta} label="Italian Cuisine Pasta" />
          Pasta
        </CustomButton>
        <CustomButton
          sx={{
            paddingInlineEnd: "9rem",
            "&:focus": {
              backgroundColor: "#898989",
            },
          }}
          onClick={() => setFoodList("Starter")}
        >
          <ButtonWithImage src={starter} label="Starter" />
          Starter
        </CustomButton>
      </Box>
    </Box>
  );
};

export default CategoryInfo;
