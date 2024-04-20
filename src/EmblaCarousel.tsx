import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';




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
      
      // draggable={true}
      // showDots={true}
      // pauseOnHover={true}
      responsive={responsive}
      // autoPlaySpeed={3000}
      // keyBoardControl={true}
      // containerClass="container-with-dots"
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      // dotListClass="custom-dot-list-style"
      // itemClass=""
      >
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
</Carousel>
      

    
  )
}

export default EmblaCarousel
