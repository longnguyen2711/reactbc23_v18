import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { dangNhapApiAction } from '../../redux/Reducers/nguoiDungReducer';

export default function Login(props) {

    const dispatch = useDispatch() 

    const userLoginRef = useRef({
        taiKhoan: '',
        matKhau: ''
    })

    const handleChange = (event) => {
        let {id, value} = event.target;
        userLoginRef.current[id] = value;
        console.log(userLoginRef.current) // useRef gán lại component nhưng không render lại, input dùng useRef

    }

    const handeSubmit = (event) => {
        event.preventDefault();
        // Gọi hàm api action => trả về 1 hàm action thunk
        const actionThunk = dangNhapApiAction(userLoginRef.current)
        // dispatch action thực thi
        dispatch(actionThunk)
    }

  return (
    <form className='container mt-5 w-50' onSubmit={handeSubmit}>
        <h3>Login</h3>
        <div className="form-group">
            <p>Tài khoản</p>
            <input className="form-control" id='taiKhoan' onChange={handleChange} />
        </div>
        <div className="form-group">
            <p>Mật khẩu</p>
            <input className="form-control" id='matKhau' onChange={handleChange} />
        </div>
        <div className="form-group">
            <button className='btn btn-success' type='submit'>Đăng nhập</button>
        </div>
    </form>
  )
}
