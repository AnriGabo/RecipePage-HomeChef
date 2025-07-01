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
  const categories = [
    { label: "All Type", image: alltype, alt: "alltype food", padding: "8rem" },
    { label: "Beef", image: beef, alt: "Beef Food", padding: "9rem" },
    { label: "Dessert", image: dessert, alt: "Desert Food", padding: "8rem" },
    { label: "Seafood", image: seaFood, alt: "SeaFood", padding: "8rem" },
    {
      label: "Pasta",
      image: pasta,
      alt: "Italian Cuisine Pasta",
      padding: "9rem",
    },
    { label: "Starter", image: starter, alt: "Starter", padding: "9rem" },
  ];

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
        {categories.map(({ label, image, alt, padding }) => (
          <CustomButton
            key={label}
            sx={{
              paddingInlineEnd: padding,
              "&:focus": {
                backgroundColor: "#898989",
              },
            }}
            onClick={() => setFoodList(label)}
          >
            <ButtonWithImage src={image} label={alt} />
            {label}
          </CustomButton>
        ))}
      </Box>
    </Box>
  );
};

export default CategoryInfo;
