import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
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

  const renderFilms = () => {
    return arrFilm.map((film, index) => {
      return (
        <div className="col-4 col-md-4 col-sm-12" key={index}>
          <div className="card">
            <img width={150} src={film.hinhAnh} alt="..." />
            <div className="card-body">
              <p>{film.tenPhim}</p>
              <p className="card-body">{film.moTa.length > 60 ? <p>{film.moTa.slice(0,60)}...</p> : <p>{film.moTa}</p>}</p>
              <NavLink to="/detail" className="btn btn-success">Đặt vé</NavLink>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div className="row">{renderFilms()}</div>
    </div>
  );
}
