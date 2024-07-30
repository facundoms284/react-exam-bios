import { styled } from "@mui/material/styles";

import Checkbox from "@mui/material/Checkbox";

const customPurple = "#6C63FF";

const CustomCheckbox = styled(Checkbox)({
  "& .MuiSvgIcon-root": {
    fontSize: 32,
    color: customPurple,
  },
});

const MyCheckbox = ({ checked, onChange }) => {
  return <CustomCheckbox checked={checked} onChange={onChange} />;
};

export default MyCheckbox;
