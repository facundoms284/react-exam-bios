import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";

const customPurple = "#6C63FF";

const CustomFab = styled(Fab)({
  backgroundColor: customPurple,
  color: "white",
  "&:hover": {
    backgroundColor: "#5a50e6",
  },
});

const FloatingButton = ({ className }) => {
  const location = useLocation();

  const IconComponent = location.pathname === "/" ? AddIcon : HomeIcon;

  const LinkTo = location.pathname === "/" ? "/form" : "/";

  const titleComponent = location.pathname === "/" ? "Add a new task" : "Home";

  return (
    <Link to={LinkTo} className={className}>
      <CustomFab aria-label="add" title={titleComponent}>
        <IconComponent />
      </CustomFab>
    </Link>
  );
};

export default FloatingButton;
