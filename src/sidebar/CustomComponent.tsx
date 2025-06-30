import { Button, styled } from "@mui/material";

const CustomButton = styled(Button)(() => ({
  textTransform: "capitalize",
  width: "auto",
  height: "3.3rem",
  border: "1px solid gray",
  borderRadius: "10px",
  color: "white",
  gap: "1rem",
}));

export default CustomButton;

interface image {
  src: string;
  label: string;
}

export const ButtonWithImage = ({ src, label }: image) => {
  return (
    <img
      src={src}
      alt={label}
      style={{ width: "3rem", borderRadius: "15px" }}
    />
  );
};
