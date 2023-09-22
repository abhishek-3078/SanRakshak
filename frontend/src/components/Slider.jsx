import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
// import pic1 from '../assets/pic1.jpeg'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '600px'
}
const slideImages = [
  {
    url: 'https://images.pexels.com/photos/1667240/pexels-photo-1667240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Slide 1'
  },
  {
    url: 'https://ca-times.brightspotcdn.com/dims4/default/1bbd5ec/2147483647/strip/true/crop/5760x3696+0+0/resize/1200x770!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fc4%2F6a%2Fb8b04d452a5b2933463417321d0e%2Fe7b08551a43c44de8691c8535767fbb6',
    caption: 'Slide 2'
  },
  {
    url: 'https://s01.sgp1.digitaloceanspaces.com/large/812059-37883-vjrvoxmygo-1468919302.jpg',
    caption: 'Slide 3'
  },
];

const Slider = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> {
            return (<div key={index} className='h-fit'>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>)
          })} 
        </Slide>
      </div>
    )
}



export default Slider;