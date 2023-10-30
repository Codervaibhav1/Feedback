import { Box, Button, Rating, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeedback, updateFeedback } from "../features/slice/feedbackSlice";
// import StarOutlineIcon from '@mui/icons-material/StarOutline';
const Myform = () => {
  const dispatch = useDispatch();
  const {edit} = useSelector(state=>state.feedback)
  const [rating, setRating] = useState("");
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
if(edit.isEdit){
  dispatch(updateFeedback({
    id:edit.item.id,
    rating:rating,
    review:text
  }))
}else{
  dispatch(
    addFeedback({
      id: crypto.randomUUID(),
      rating: rating,
      review: text,
    })
  );
  setRating("");
  setText("");
};
}
    
useEffect(()=>{
   setText(edit.item.review)
   setRating(edit.item.rating)
},[edit])
  return (
    <form
      onSubmit={handleSubmit}
      id="form"
      className=" d-flex justify-content-center flex-column col-12 col-lg-8 bg-light p-3"
    >
      <h1 className="text-center">Feedback </h1>
      <Typography component="legend" className=" fs-3">
        Rating
      </Typography>
      <Rating
      precision={0.5}
        sx={{ fontSize: "60px" }}
         name="simple"
        onChange={(e) => setRating(e.target.value)}
        value={rating}
      />
      <TextField
        label="Enter Review"
        className="my-4"
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <Button variant="contained" color="success" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Myform;
