import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../../styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import slide1 from "../../../assets/banner-1.jpg"
import slide2 from "../../../assets/banner-2.jpg"
import slide3 from "../../../assets/banner-3.jpg"
import slide4 from "../../../assets/banner-4.jpg"
import slide5 from "../../../assets/banner-5.jpg"
import slide6 from "../../../assets/banner-6.jpg"

const SliderSection = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper rounded-2xl my-6"
      >

      <SwiperSlide>
            <div className='w-full h-[600px] text-center flex flex-col justify-end' style={{backgroundImage: `url("${slide1}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',}}>

                <div className='space-y-4 mb-40'>
                  <h2 className='text-5xl text-white font-bold'>🍿 Endless Entertainment Awaits</h2>
                  <p className='text-gray-300 text-lg font-bold'> Stream top movies, series, and originals anytime, anywhere.</p>
                  <button onClick={()=>{
                    window.scrollTo(0, 700);
                  }} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-sm text-sm px-6 py-2.5 text-center me-2 mb-2 ">Get App</button>
                </div>

            </div>
          </SwiperSlide>
      <SwiperSlide>
            <div className='w-full h-[600px] text-center flex flex-col justify-end' style={{backgroundImage: `url("${slide2}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', background: '#00001',}}>

                <div className='space-y-4 mb-40'>
                  <h2 className='text-5xl text-white font-bold'>🎧 Your Soundtrack Starts Here</h2>
                  <p className='text-gray-300 text-lg font-bold'>Discover music, podcasts, and playlists tailored for you.</p>
                  <button onClick={()=>{
                    window.scrollTo(0, 700);
                  }} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-sm text-sm px-6 py-2.5 text-center me-2 mb-2 ">Get App</button>
                </div>

            </div>
          </SwiperSlide>
      <SwiperSlide>
            <div className='w-full h-[600px] text-center flex flex-col justify-end' style={{backgroundImage: `url("${slide3}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', background: '#00001',}}>

                <div className='space-y-4 mb-40'>
                  <h2 className='text-5xl text-white font-bold'>📢 Speak Freely on X</h2>
                  <p className='text-gray-300 text-lg font-bold'>Join global conversations and stay ahead of what’s trending</p>
                  <button onClick={()=>{
                    window.scrollTo(0, 700);
                  }} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-sm text-sm px-6 py-2.5 text-center me-2 mb-2 ">Get App</button>
                </div>

            </div>
          </SwiperSlide>
      <SwiperSlide>
            <div className='w-full h-[600px] text-center flex flex-col justify-end' style={{backgroundImage: `url("${slide4}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', background: '#00001',}}>

                <div className='space-y-4 mb-40'>
                  <h2 className='text-5xl text-white font-bold'>💬 Hang Out with Your Community</h2>
                  <p className='text-gray-300 text-lg font-bold'>Voice, video, and chat—all in one place. Build or join a server</p>
                  <button onClick={()=>{
                    window.scrollTo(0, 700);
                  }} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-sm text-sm px-6 py-2.5 text-center me-2 mb-2 ">Get App</button>
                </div>

            </div>
          </SwiperSlide>
      <SwiperSlide>
            <div className='w-full h-[600px] text-center flex flex-col justify-end' style={{backgroundImage: `url("${slide5}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', background: '#00001',}}>

                <div className='space-y-4 mb-40'>
                  <h2 className='text-5xl text-white font-bold'>🎮 Live. Game. Repeat.</h2>
                  <p className='text-gray-300 text-lg font-bold'> Watch your favorite streamers or start streaming your passion.</p>
                  <button onClick={()=>{
                    window.scrollTo(0, 700);
                  }} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-sm text-sm px-6 py-2.5 text-center me-2 mb-2 ">Get App</button>
                </div>

            </div>
          </SwiperSlide>
      <SwiperSlide>
            <div className='w-full h-[600px] text-center flex flex-col justify-end' style={{backgroundImage: `url("${slide6}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', background: '#00001',}}>

                <div className='space-y-4 mb-40'>
                  <h2 className='text-5xl text-white font-bold'>🔗 Join the Conversation</h2>
                  <p className='text-gray-300 text-lg font-bold'>Threads by Instagram makes your voice heard in real time.</p>
                  <button onClick={()=>{
                    window.scrollTo(0, 700);
                  }} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-sm text-sm px-6 py-2.5 text-center me-2 mb-2 ">Get App</button>
                </div>
                
            </div>
          </SwiperSlide>


        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default SliderSection;