//rxslice

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { http, TOKEN_CYBERSOFT } from "../../util/setting";

const initialState = {
  arrFilm: [],
};

const phimReducer = createSlice({
  name: "phimReducer",
  initialState,
  reducers: {
    layDanhSachPhimAction: (state, action) => {
      console.log(action);
      // Code không phải clone object hoặc array
      // Khai báo action creator tại đây
      state.arrFilm = action.payload;
    },
  },
});

export const { layDanhSachPhimAction } = phimReducer.actions;

export default phimReducer.reducer;

//----------------- action thunk -----------------
export const getFilmApiAction = () => {
  return async (dispatch) => {
    try {
      
      // let result = await axios({
      //   url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      //   method: "GET",
      //   headers: {
      //     TokenCybersoft: TOKEN_CYBERSOFT,
      //   },
      // });
      let result = await http.get('/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01');
      // Data trả về result.data.content

      
      const action = layDanhSachPhimAction(result.data.content);
      /*
        action = {
            type: 'phimReducer/layDanhSachPhimAction',
            payload: result.data.content
        }
      */
      // Dữ liệu mặc định action tạo ra nằm trong action.payload
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};
