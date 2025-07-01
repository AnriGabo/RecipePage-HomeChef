import { Box, Stack, Typography } from "@mui/material";
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
        <Stack
          sx={{
            zIndex: "1000",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginInlineStart: "27rem",
            paddingBlockStart: "3rem",
            gap: "2rem",
            
          }}
        >
          <Box sx={{paddingInlineEnd:"7.3rem"}}>
            <MenuBookIcon sx={{fontSize:"2.3rem"}} />
          </Box>
          <Box sx={{paddingInlineEnd:"2rem"}}>
            <Typography variant={"h3"} component={"p"} sx={{fontFamily: '"Georgia", "Palatino Linotype", "Book Antiqua", "Palatino", serif'}}>
              Chefs
            </Typography>
          </Box>
          <Box sx={{paddingInlineStart:"9rem"}}>
            <Typography variant={"h2"} component={"p"} sx={{fontFamily: '"Segoe UI", "Roboto", "Helvetica Neue", "Arial", sans-serif'}}>
              Academy
            </Typography>
          </Box>
          <Box>
            <Typography variant={"h3"} component={"p"} sx={{fontFamily: '"Georgia", "Palatino Linotype", "Book Antiqua", "Palatino", serif'}}>
              Secrets
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Header;
