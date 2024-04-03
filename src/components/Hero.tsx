// import VideoBG from "../assets/CataclysmCinematicTrailerBg1080.mp4";

// const Hero = () => {
//   return (
//     <div className='relative'>
//       <video
//         src={VideoBG}
//         autoPlay
//         loop
//         muted
//         className='container w-full max-h-[450px] object-cover py-4'
//       />
//     </div>
//   );
// };

// export default Hero;

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

import Image1 from "../assets/WoW_Classic-sod.jpg";
import Image2 from "../assets/WoW_Classic_Cata.jpg";
import Image3 from "../assets/WoW-war-wighin.jpg";

const Hero = () => {
  return (
    <div className='container py-12'>
      <Carousel>
        <CarouselContent className='flex gap-4 '>
          <CarouselItem className='w-full h-auto relative'>
            <div className='absolute inset-0 bg-opacity-50 bg-gray-900 flex flex-col justify-between items-start text-white p-4 md:p-8'>
              <div className='text-center md:text-left'>
                <h2 className='text-xl px-2 sm:text-2xl md:text-3xl font-bold tracking-tight'>
                  Season Of Discovery
                </h2>
              </div>
              <p className='text-xs sm:text-sm md:text-base sm:mb-6 sm:h-auto'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                nam, error optio tenetur commodi quibusdam nulla laboriosam,
              </p>
              <Button className='px-3 py-2 sm:px-10 sm:py-6  bg-red-500 font-bold hover:text-red-950 hover:bg-white absolute  right-4 sm:right-8'>
                Learn more
              </Button>
            </div>
            <img
              src={Image1}
              alt='Image 1'
              className='w-full h-full object-cover'
            />
          </CarouselItem>
          <CarouselItem className='w-full h-auto relative'>
            <div className='absolute inset-0 bg-opacity-50 bg-gray-900 flex flex-col justify-between items-start text-white p-4 md:p-8'>
              <div className='text-center md:text-left'>
                <h2 className='text-xl px-2 sm:text-2xl md:text-3xl font-bold tracking-tight'>
                  Cataclysm Classic
                </h2>
              </div>
              <p className='text-xs sm:text-sm md:text-base sm:mb-6 sm:h-auto'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                nam, error optio tenetur commodi quibusdam nulla laboriosam,
              </p>
              <Button className='px-3 py-2 sm:px-10 sm:py-6  bg-red-500 font-bold hover:text-red-950 hover:bg-white absolute  right-4 sm:right-8'>
                Learn more
              </Button>
            </div>
            <img
              src={Image2}
              alt='Image 1'
              className='w-full h-full object-cover'
            />
          </CarouselItem>
          <CarouselItem className='w-full h-auto relative'>
            <div className='absolute inset-0 bg-opacity-50 bg-gray-900 flex flex-col justify-between items-start text-white p-4 md:p-8'>
              <div className='text-center md:text-left'>
                <h2 className='text-xl px-2 sm:text-2xl md:text-3xl font-bold tracking-tight'>
                  The War Within
                </h2>
              </div>
              <p className='text-xs sm:text-sm md:text-base sm:mb-6 sm:h-auto'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                nam, error optio tenetur commodi quibusdam nulla laboriosam,
              </p>
              <Button className='px-3 py-2 sm:px-10 sm:py-6  bg-red-500 font-bold hover:text-red-950 hover:bg-white absolute  right-4 sm:right-8'>
                Learn more
              </Button>
            </div>
            <img
              src={Image3}
              alt='Image 1'
              className='w-full h-full object-cover'
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-red-500 w-10 h-10 rounded-full z-10' />
        <CarouselNext className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-red-500 w-10 h-10 rounded-full z-10' />
      </Carousel>
    </div>
  );
};

export default Hero;
