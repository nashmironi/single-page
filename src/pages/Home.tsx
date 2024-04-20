import Header from "../components/Header";
import EmblaCarousel from "../EmblaCarousel";
import Footer from "../components/Footer";




const Home = () => {
    return (
      <div>
        <Header />
        <div className=" flex mt-9 flex-col items-center mb-16 ">
         <h1 className=" text-black w-[343px] text-center text-4xl font-bold  md:text-5xl md:w-[690px] lg:text-56px]">Design solutions made easy</h1>
         <p className=" mt-4 w-[285px] text-brown text-16px font-normal leading-7 text-center md:text-lg md:w-[573px] lg:mb-20 md:mb-16 mb-4">With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</p>
         <div className=" grid gap-6 grid-cols-2 grid-rows-6 w-full md:grid-cols-4 md:grid-rows-3 md:mb-[120px] xl:grid-rows-2 xl:grid-cols-6">
            <div className=" bg-purple rounded-lg p-6 flex flex-col flex-wrap row-start-1 row-end-3 col-start-1 col-end-3  "> 
            <img src="Group 2.svg" className=" "/>
             <p className=" mt-[94px] font-bold text-white text-xl">Graphic Design</p>
            </div>
            <div className="   bg-yellow rounded-lg p-6 flex flex-wrap flex-col row-start-3 row-end-4 md:row-start-1 md:col-start-3 md:col-end-3 md:row-end-1 ">
            <img src="Group 5 (1).svg" className=" ml-10"/>
            <p className=" font-bold text-white text-xl mt-10">UI/UX</p>
            </div>
            <div className="   bg-pink rounded-lg p-6 flex flex-col  flex-wrap  row-start-3 row-end-4 col-start-2  md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-1 ">
            <img src="Group 18.svg" className=" ml-10"/>
            <p className="  font-bold text-white text-xl mt-10">Apps</p>
            </div>
            <div className=" bg-light_red rounded-lg p-6 flex flex-col flex-wrap row-start-4 col-start-1 col-end-3 md:col-start-3 md:col-end-5 md:row-start-2 md:row-end-2  xl:col-start-3 xl:col-end-5 ">
            <img src="Group 17.svg" className=" ml-40"/>
            <p className="  font-bold text-white text-xl  mt-4">Illustrations</p>
            </div>
            <div className="   bg-cyan rounded-lg p-6 flex flex-col flex-wrap  row-start-5  col-start-1 col-end-3 md:row-start-3 md:row-end-4 xl:row-start-1 xl:row-end-1 xl:col-start-5 xl:col-end-7">
            <img src="Group 5 (2).svg" className=" ml-36"/>
            <p className=" font-bold text-white text-xl  mt-4">Photography</p>
            </div>
            <div className="   bg-dark_purple rounded-lg p-6 flex flex-col flex-wrap row-start-6  col-start-1 col-end-3 md:col-start-3 md:col-end-5 md:row-start-3 md:row-end-4  xl:row-start-2 xl:row-end-2 xl:col-start-5 xl:col-end-7">
            <img src="Group 5 (3).svg" className=" ml-40"/>
            <p className=" font-bold text-white text-xl mt-4">Motion Graphics</p>
            </div>
         </div>
         <div className=" flex flex-col items-center md:flex-row lg:gap-32 mb-[100px]">
            <div className=" w-[300] h-[300] rounded-[300px] bg-cyan overflow-hidden mt-10 mb-6 ">
                <img src="image-removebg-preview(563).png" className=" w-[275px] h-[285px] "/>
            </div>
            <div className=" flex flex-col items-center md:w-[339px] md:ml-[70px] md:flex md:flex-col md:items-start  ">
            <h2 className=" text-black text-center text-3xl font-bold mb-6 md:text-left  lg:text-4xl">I’m Amy, and I’d love to work on your next project</h2>
            <p className="  text-brown text-center text-base font-medium leading-6 md:text-left lg:text-lg">I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</p>
            <button className=" w-[176px] h-[44px] mt-6 rounded-[28px] bg-light_red  text-white text-sm font-bold leading-7  ">Free Consultation</button>
            </div>
         </div>
         
         <div className=" md:mt-[120px]">
            <h2 className=" text-black text-2xl font-bold md:text-4xl">My Work</h2>
         </div>
         <div className=" mb-[200px] w-full"><EmblaCarousel /></div>
         

         <div className="  h-[353px] rounded-[10px] bg-black p-[24px] flex flex-col items-center md: w-full lg:flex-row lg:gap-[182px] lg:justify-around">
            <div className=" lg:w-[540px] lg:ml-[65px]">
            <h4 className=" text-creme text-3xl font-bold text-center mt-6  mb-[20px] md:text-4xl md:mt-14 lg:w-[540px] lg:text-left lg:mt-0">Book a call with me</h4>
            <p className=" text-creme text-base font-medium leading-6 text-center md:text-lg  md:w-[540px] lg:w-[540px] lg:text-left">I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>
            </div>
            <button className=" w-[176px] h-[44px] rounded-[28px] bg-light_red  mt-6 text-white text-sm font-bold leading-7  lg:w-[228px] lg:h-[56px] ">Free Consultation</button>
         </div>
        </div>
        
        <Footer/>
      </div>
    );
  };
  
  export default Home;
  