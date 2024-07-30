import { Select, MenuItem, FormControl } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomSelect = styled(Select)({
  borderRadius: "0.5rem",
  height: "3rem",
  backgroundColor: "#6C63FF",
  "& .MuiSelect-icon": {
    color: "#fff",
  },
  "&:hover": {
    backgroundColor: "#5a50e6",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#6C63FF",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  padding: "0 0.5rem",
  "& .MuiSelect-select": {
    color: "#fff",
  },
});

const CustomFormControl = styled(FormControl)({
  width: "200px",
});

const CustomMenuItem = styled(MenuItem)({
  color: "#fff",
  backgroundColor: "#6C63FF",
  "&:hover": {
    backgroundColor: "#5a50e6",
  },
  "&.Mui-selected": {
    backgroundColor: "#6C63FF",
  },
  "&.Mui-selected:hover": {
    backgroundColor: "#5a50e6",
  },
});

const CustomSelectComponent = ({ selectedFilter, handleFilterChange }) => (
  <CustomFormControl>
    <CustomSelect
      value={selectedFilter}
      onChange={handleFilterChange}
      displayEmpty
      renderValue={(value) => (
        <span style={{ color: value === "" ? "#fff" : undefined }}>
          {value === "" ? "ALL" : value}
        </span>
      )}
      MenuProps={{
        PaperProps: {
          style: {
            backgroundColor: "#6C63FF",
            borderRadius: "0.5rem",
          },
        },
      }}
    >
      <CustomMenuItem value="ALL">ALL</CustomMenuItem>
      <CustomMenuItem value="COMPLETED">COMPLETED</CustomMenuItem>
      <CustomMenuItem value="UNCOMPLETED">UNCOMPLETED</CustomMenuItem>
    </CustomSelect>
  </CustomFormControl>
);

export default CustomSelectComponent;
