import { Box, Button, Typography } from "@mui/material";
import beef from "../images/Beef2.png";
import breakfast from "../images/breakfast2.png";
import dessert from "../images/dessert2.png";
import seaFood from "../images/seaFood.png";
import pasta from "../images/pasta.png";
import starter from "../images/starter.png";

export default function Category() {
  return (
    <Box component={"aside"} sx={{ gridArea: "sidebar" }}>
      <Box sx={{ marginInlineStart: "3rem" }}>
        <Typography variant={"h5"} component={"p"} sx={{ color: "white" }}>
          Categories
        </Typography>
      </Box>

      {/* საჭმელების კატეგორიების ჩამონათვალი :) */}
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
        <Button
          sx={{
            textTransform: "capitalize",
            width: "auto",
            height: "3.3rem",
            border: "1px solid gray",
            borderRadius: "10px",
            paddingInlineEnd: "9.6rem",
            color: "white",
            gap: "1rem",
          }}
        >
          <img src={beef} style={{ width: "3rem", borderRadius: "15px" }} />
          Beef
        </Button>
        <Button
          sx={{
            textTransform: "capitalize",
            width: "auto",
            height: "3.3rem",
            border: "1px solid gray",
            borderRadius: "10px",
            paddingInlineEnd: "8rem",
            gap: "1rem",
            color: "white",
          }}
        >
          <img
            src={breakfast}
            style={{ width: "3rem", borderRadius: "15px" }}
          />
          Breakfast
        </Button>
        <Button
          sx={{
            textTransform: "capitalize",
            width: "auto",
            height: "3.3rem",
            border: "1px solid gray",
            paddingInlineEnd: "9rem",
            gap: "1rem",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <img src={dessert} style={{ width: "3rem", borderRadius: "15px" }} />
          Desert
        </Button>
        <Button
          sx={{
            textTransform: "capitalize",
            width: "auto",
            height: "3.3rem",
            border: "1px solid gray",
            borderRadius: "10px",
            paddingInlineEnd: "8rem",
            gap: "1rem",
            color: "white",
          }}
        >
          <img src={seaFood} style={{ width: "3rem", borderRadius: "15px" }} />
          SeaFood
        </Button>
        <Button
          sx={{
            textTransform: "capitalize",
            width: "auto",
            height: "3.3rem",
            border: "1px solid gray",
            borderRadius: "10px",
            paddingInlineEnd: "9rem",
            gap:"1rem",
            color: "white",
          }}
        >
          <img src={pasta} style={{ width: "3rem", borderRadius: "15px" }} />
          Pasta
        </Button>
        <Button
          sx={{
            textTransform: "capitalize",
            width: "auto",
            height: "3.3rem",
            border: "1px solid gray",
            borderRadius: "10px",
            paddingInlineEnd: "9rem",
            gap:"1rem",
            color: "white",
          }}
        >
          <img src={starter} style={{ width: "3rem", borderRadius: "15px" }} />
          Starter
        </Button>
      </Box>
    </Box>
  );
}
