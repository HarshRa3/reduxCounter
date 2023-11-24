import React from "react";
import { Box, Button, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const count=useSelector(state=>state)
  const dispatch=useDispatch();


  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "37rem",
        gap: 3,
      }}
    >
      <Button variant="contained" color="error" onClick={(e)=>dispatch({type:'DECREMENT'})}   >
        <RemoveIcon />
      </Button>
      <Typography variant="h4">{count}</Typography>
      <Button color="success" variant="contained" onClick={(e)=>dispatch({type:'INCREMENT'})} >
        <AddIcon />
      </Button>
    </Box>
  );
};

export default Counter;
