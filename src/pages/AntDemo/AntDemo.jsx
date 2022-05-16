import React from 'react'
import { Carousel } from 'antd';

const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

export default function AntDemo() {
  return (
    <div className='container'>
        <Carousel autoplay dots="dotsClass">
            <div>
                {/* <h3 style={contentStyle}>1</h3> */}
                <img style={contentStyle} src="http://picsum.photos/id/15/1281/15" alt="..."/>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
        <button className='btn btn-success' onClick={() => {

        }}>Next</button>
    </div>
  )
}
