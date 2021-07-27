import React,{ useState } from 'react';
import './style.css';
import './style.css';
import nike1 from '../assets/nike-1.png'
import nike2 from '../assets/nike-2.png';
import nike3 from '../assets/nike-3.png';
import nike4 from '../assets/nike-4.png';
import nike5 from '../assets/nike-5.png';
import nike6 from '../assets/nike-6.png';
import right from '../assets/Icons_SVG/seta-carrosel-anterior.svg';
import left from '../assets/Icons_SVG/seta-carrosel-proximo.svg';
import arrow from '../assets/Icons_SVG/seta-link.svg';
import DetailsThumb from '../Components/details';

class Carousel extends React.Component{
  
  state = {
    products: [
      {
        
        "src": [
         nike1,nike2,nike3,nike4,nike5,nike6

          ],
        
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }
  
  render(){
   
    const {products, index} = this.state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  
                </div>
              <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
               <button className='btnright'>
                 <img src={right} />
               </button>
               <button className='btnleft'>
                 <img src={left} />
               </button>
              </div>
              <button className='btnvideo'>
                VIDEO DE DEMONSTRAÇÃO
                 <img src={arrow} />
               </button>
            </div>
          ))
        }
      </div>
    );
  };
}

export default Carousel;