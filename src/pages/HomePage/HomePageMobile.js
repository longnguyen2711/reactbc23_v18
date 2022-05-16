import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getFilmApiAction } from "../../redux/Reducers/phimReducer";

export default function HomePageMobile(props) {
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
        <tr key={index}>
            <td style={{swidth: '20%'}}>
                <img width={100} src={film.hinhAnh} alt="..."/>
            </td>
            <td>
                <p className="card-body">{film.moTa.length > 60 ? <p>{film.moTa.slice(0,60)}...</p> : <p>{film.moTa}</p>}</p>
            </td>
            <td style={{width:"20%"}}>
                <NavLink to="/" className="btn btn-success">Đặt vé</NavLink>
            </td>
        </tr>
      );
    });
  };

  return (
    <div className="container">
      <table className="table" border="0">
          <tbody>
            {renderFilms()}
          </tbody>
      </table>
    </div>
  );
}
