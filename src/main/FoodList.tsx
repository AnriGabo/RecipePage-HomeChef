import { Box, Stack, Typography } from "@mui/material";
import type React from "react";

interface FoodItem {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
}

interface FilterData {
  filterData: FoodItem[];
}
const FoodList: React.FC<FilterData> = ({ filterData }) => {
  return (
    <Stack
      component={"main"}
      sx={{
        gridArea: "main",
        flexDirection: "row",
        flexWrap: "wrap",
        marginBlock: "5rem",
        gap: "3.5rem",
      }}
    >
      {filterData.map((Item) => (
        <Stack
          key={Item.idCategory}
          sx={{
            backgroundColor: "#003153",
            padding: "0.5rem",
            borderRadius: "10px 10px 0px 0px",
            height: "15rem",
          }}
        >
          <Box
            sx={{
              minWidth: "20rem",
              paddingInlineStart: "0.5rem",
              paddingBlock: "1rem",
              backgroundColor: "#0C2340;",
              borderRadius: "20px",
              maxHeight: "11rem",
            }}
          >
            <img
              src={Item.strCategoryThumb}
              alt="This is Cuisine Food"
              style={{
                width: "14rem",
                paddingInlineStart: "0.5rem",
                fontFamily:"monospace",
                display: "flex",
                justifyContent: "center",
              }}
            />

            <Box sx={{ marginBlockStart: "2rem", paddingInlineStart: "1rem" }}>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "1.3rem",
                  textDecoration: "underline",
                  textDecorationColor: "white",
                  textTransform: "uppercase",
                  fontFamily:
                    "'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                  cursor: "pointer",
                }}
              >
                {Item.strCategory}
              </Typography>
            </Box>
          </Box>
        </Stack>
      ))}
    </Stack>
  );
};

export default FoodList;
