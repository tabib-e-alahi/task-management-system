import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";

import List from "@mui/joy/List";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";
import Menu from "@mui/icons-material/Menu";

import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const DashDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <IconButton
        variant="solid"
        color="danger"
        onClick={() => setOpen(true)}
      >
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            ml: "auto",
            mt: 1,
            mr: 2,
          }}
        >
          <Typography
            component="label"
            htmlFor="close-icon"
            fontSize="sm"
            fontWeight="lg"
            sx={{ cursor: "pointer" }}
          >
            Close
          </Typography>
          <ModalClose id="close-icon" sx={{ position: "initial" }} />
        </Box>
        
        <List
          size="lg"
          component="nav"
          className="flex flex-col gap-4 items-center"
        >
          <Link to='/' sx={{ fontWeight: "lg" }}>Home</Link>
          <Link>About</Link>
          <Link to='/login' >Login</Link>
          <Link>Contact us</Link>
        </List>
      </Drawer>
    </Fragment>
  );
};

export default DashDrawer;
