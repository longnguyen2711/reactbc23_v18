import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilmApiAction } from "../../redux/Reducers/phimReducer";

export default function HomePage(props) {
  // useSelector
  const { arrFilm } = useSelector((reducer) => reducer.phimReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    // Dispatch action api
    const actionThunk = getFilmApiAction();
    dispatch(actionThunk);
    // Call api
  }, []);

  console.log(arrFilm);
  return <div>HomePage</div>;
}
