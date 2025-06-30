import { Box, Typography } from "@mui/material";
import pineappleBackground from "../images/pineappleBackground.jpg";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const Header = () => {
  return (
    <Box
      component={"header"}
      sx={{ gridArea: "mainBackground", margin: "0.7rem" }}
    >
      <Box
        sx={{
          height: "25rem",
          backgroundImage: `url(${pineappleBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 37%",
          zIndex: "0",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            zIndex: "1000",
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            marginInlineEnd: "25rem",
            paddingBlockStart: "5rem",
            gap: "2rem",
          }}
        >
          <Box>
            <MenuBookIcon />
          </Box>
          <Box sx={{ paddingInlineEnd: "2.1rem" }}>
            <Typography variant={"h3"} component={"p"}>
              Chefs
            </Typography>
          </Box>
          <Box>
            <Typography variant={"h3"} component={"p"}>
              Academy
            </Typography>
          </Box>
          <Box>
            <Typography variant={"h3"} component={"p"}>
              Secrets
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
