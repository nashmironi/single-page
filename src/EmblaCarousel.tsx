import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Lurji from './assets/Bitmap(1).png';
import Indigo from './assets/Bitmap(2).png';
import Gazeti from './assets/Bitmap(3).png';
import Wigni from './assets/Bitmap(4).png';
import Telefoni from './assets/Bitmap(5).png';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};



const EmblaCarousel = () => {
  

  return (
    
  
      <Carousel 
      responsive={responsive}
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      dotListClass="custom-dot-list-style"
      
      >
    <div> <img src={Lurji}/></div>
    <div><img src={Indigo}/></div>
    <div><img src={Gazeti}/></div>
    <div><img src={Wigni}/></div>
    <div><img src={Telefoni}/></div>
</Carousel>
      

    
  )
}

export default EmblaCarousel
