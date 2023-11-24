import { Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <>
      <Typography variant="h3" sx={{bgcolor:'#241a25',textAlign:'center',color:'white',padding:'20px'}} >
        Counter App
      </Typography>
    </>
  );
};

export default Header;
