import { styled } from "@mui/material/styles";

import Button from "@mui/material/Button";

const customPurple = "#6C63FF";

const CustomButton = styled(Button)({
  backgroundColor: customPurple,
  color: "white",
  "&:hover": {
    backgroundColor: "#5a50e6", // Un tono más oscuro para el hover
  },
  padding: "8px 12px",
  height: "48px",
});

const AddTaskBtn = ({ onClick, children }) => {
  return (
    <CustomButton onClick={onClick} variant="contained" type="submit">
      {children}
    </CustomButton>
  );
};

export default AddTaskBtn;
