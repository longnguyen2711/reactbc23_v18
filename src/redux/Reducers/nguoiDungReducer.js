//rxslice

import { createSlice } from "@reduxjs/toolkit";
import { ACCESSTOKEN, http, setCookie, USER_LOGIN } from "../../util/setting";

const initialState = {
  userLogin: {},
};

const nguoiDungReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    dangNhap: (state, action) => {
        console.log(action);
        state.userLogin = action.payload;
    },
  },
});

export const {dangNhap} = nguoiDungReducer.actions;

export default nguoiDungReducer.reducer;

//--------------------- action thunk -----------------
export const dangNhapApiAction = (userLogin) => {
  return async (dispatch) => {
    try {
      let result = await http.post("/api/QuanLyNguoiDung/DangNhap", userLogin);
      console.log("result", result);

      // Lưu lại token khi đăng nhập thành công
      let usLoginResult = result.data.content;

      //Lưu thong tin user vào localstoreage sai khi đăng nhập thành công
      localStorage.setItem(USER_LOGIN, JSON.stringify(usLoginResult))

      //Lưu token của user vào localstorege khi đăng nhập thành công
      localStorage.setItem(ACCESSTOKEN, usLoginResult.ACCESSTOKEN)

      //Sau khi gán localStorege xong thì đưa dữ liệu lên redux
    //  // Cách 1
    //   const action = {
    //       type: 'userReducer/dangnhap',
    //       payload: usLoginResult,
    //   }
    //  // Cách 2:
     const action = dangNhap(usLoginResult);
     dispatch(action)

    // setCookie
    setCookie(USER_LOGIN, JSON.stringify(usLoginResult), 30); // => Lưu 30 ngày ở Client

    } catch (err) {
      console.log( err.response?.data );
      // optional data
    }
  };
};
