import { ListItemButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "../../components";

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          width: "100vh",
          height: "10vh",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          Unleash the Beast
        </Link>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <ListItemButton component="a">
            <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
              All
            </Link>
          </ListItemButton>

          <ListItemButton component="a">
            <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
              Protein
            </Link>
          </ListItemButton>

          <ListItemButton component="a">
            <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
              Creatine
            </Link>
          </ListItemButton>

          <ListItemButton component="a">
            <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
              BCCAs
            </Link>
          </ListItemButton>

          <ListItemButton component="a">
            <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
              Equipment
            </Link>
          </ListItemButton>
        </Box>
        <CartWidget/>
      </Box>
    </>
  );
};

export default Navbar;
