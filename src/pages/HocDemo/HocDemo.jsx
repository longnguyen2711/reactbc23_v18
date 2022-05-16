import React, { useState } from 'react'
import ModalHOC from '../../HOC/ModalHOC'
import LoginPage from '../LoginPage/Login'

export default function HocDemo(props) {

    const [component, setComponent] = useState(<p>Default Component</p>)

  return (
    <div className="container mt-3">
        <button className='btn btn-success mr-2' data-toggle="modal" data-target="#modelId" onClick={() => {
            setComponent(<p>Đăng ký</p>)
        }}>Đăng ký</button>
        <button className='btn btn-primary' data-toggle="modal" data-target="#modelId" onClick={() => {
            setComponent(<LoginPage/>)
        }}>Đăng nhập</button>
        <ModalHOC modalContent={component}/>
    </div>
  )
}
