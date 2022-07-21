import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import * as React from "react";
import { useSelector } from "react-redux";
import { LogOut } from "./LogOut";
import ProfileNavigation from "./ProfileNavigation";
const options = ["Profile", "Logout"];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const { role } = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label='more'
        id='long-button'
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreVertIcon style={{ color: "#FFFFFF" }} />
      </IconButton>
      <Menu
        id='long-menu'
        MenuListProps={{
          "aria-labelledby": "long-button"
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch"
          }
        }}
      >
        <ProfileNavigation />
        <LogOut />
      </Menu>
    </div>
  );
}
