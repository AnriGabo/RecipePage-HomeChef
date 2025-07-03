import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Stack, Typography } from "@mui/material";
import type React from "react";

interface FoodItem {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
}

interface FilterData {
  filterData: FoodItem[];
  setInputState: React.Dispatch<React.SetStateAction<string>>;
  InputState: string;
  setFoodList: React.Dispatch<React.SetStateAction<string>>;
}

const FoodList: React.FC<FilterData> = ({
  filterData,
  setInputState,
  InputState,
  setFoodList,
}) => {
  return (
    <Stack>
      <Box>
        <input
          type="search"
          placeholder="Find Any Cuisine"
          value={InputState}
          onChange={(e) => setInputState(e.target.value)}
          style={{
            minWidth: "18rem",
            height: "2.5rem",
            borderRadius: "20px",
            textIndent: "1rem",
            zIndex: "0",
          }}
        ></input>
      </Box>

      <Box
        onClick={() => setFoodList("")}
        sx={{ marginInline: "20rem", marginBlock: "-2.3rem",backgroundColor:"red",width:"0rem" }}
      >
        <Button variant="contained">
          {" "}
          <CloseIcon />
          Clear
        </Button>
      </Box>

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
                paddingInlineStart: "3rem",
                paddingBlock: "1rem",
                backgroundColor: "#0C2340",
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
                  fontFamily: "monospace",
                  display: "flex",
                  justifyContent: "center",
                }}
              />
            </Box>
            <Box sx={{ marginBlockStart: "0.5rem" }}>
              <Typography
                sx={{
                  color: "#0066b2",
                  fontSize: "1.4rem",
                  textDecoration: "underline",
                  textDecorationColor: "#0066b2",
                  textTransform: "capitalize",
                  fontFamily:
                    "'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                  cursor: "pointer",
                  paddingInlineStart: "1.5rem",
                }}
              >
                {Item.strCategory}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default FoodList;
