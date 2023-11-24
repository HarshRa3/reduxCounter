import React from "react";
import { Box, Button, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useSelector,useDispatch } from "react-redux"; // Importing useDispatch to dispatch actions
import { Inc,Dec } from "../States/Reducers";


const Counter = () => {
  const curState = useSelector((state) => state.number);
  const dispatch = useDispatch(); // Getting the dispatch function


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
      <Button variant="contained" color="error" onClick={()=>dispatch(Dec())} >
        <RemoveIcon />
      </Button>
      <Typography variant="h4">{curState}</Typography>
      <Button color="success" variant="contained" onClick={()=>dispatch(Inc())}>
        <AddIcon />
      </Button>
    </Box>
  );
};

export default Counter;
