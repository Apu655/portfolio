import {motion} from 'framer-motion';
import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import React, { useRef} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from '@material-ui/core'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import Card1 from "../components/skillCards/Card1";
import Card2 from "../components/skillCards/Card2";
import Card3 from "../components/skillCards/Card3";
import Card4 from "../components/skillCards/Card4";

const snapVariant={
  'initSnap':{
    opacity:1
  },
  'initTime':{
    opacity:0
  },
  'snap':{
    opacity:[1,0.8,0.5,0.2,0],
    x:12,
    
    

  },
  'time':{
    opacity:[0,0.2,0.5,0.8,1],
    transition:{delay:2}
  }
}

const skills= ()=>{
  let isScreenMD = useMediaQuery("(max-width:1024px)");
  const [buttonSnap,setButtonSnap] =useState(false)
  const [isSpace,setIsSpace] = useState(false)

  const [snap,setSnap] = useState(false)
  const snapClicker=()=>{
    setSnap(!snap)
  }
  const snapPlay=()=>{
    let audio:any =document.querySelector('#audio')
    audio.play();
}
  type TID ={
    snap:number|null
    time:number|null
  }
  var tID: any = {
    snap: null,
    time: null
  }; //we will use this variable to clear the setInterval()
  
  
  function animateScript(e:any) {
    
  //Reset every click
  clearInterval(tID[e.target.id]); //reset animation
  {/*snapPlay()*/}
  //INITIALIZE
  const startPosition = 0;
  var    position = startPosition; //start position for the image slicer
  // const  interval = 50; //100 ms of interval for the setInterval()
  const fullImgWidth = 3840;
  const  diff = 80;     //diff as a variable for position offset
  const  interval = 50; //100 ms of interval for the setInterval() Animation
  tID[e.target.id] = setInterval ( () => {
  e.target.style.backgroundPosition = 
  `-${position}px 0px`; 
  //we use the ES6 template literal to insert the variable "position"
  if (position < fullImgWidth)
  { 
    position = position + diff;
    snapPlay();
  
  }
  
  //we increment the position by 256 each time
  else
  { 
    position = startPosition;
    clearInterval(tID[e.target.id]);
  }
  //reset the position to 256px, once position exceeds 1536px
  }
  , interval ); //end of setInterval
  } //end of animateScript()



    return(
      <>

      <Head>
        <title>APU| SKILLS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
      

      drag
      >
      <Navbar stoneBar={true} snap={snap}></Navbar>
      </motion.div>
      
      <motion.div className="pt-2 bg-slate-900 min-h-screen overflow-hidden font-serif"
      initial={{scaleY:0}}
      animate={{scaleY:1}}
      transition={{
        duration:2,
      }}
      >
        <motion.div
        variants={snapVariant}
        initial={snap?'initTime':'initSnap'}
        animate={snap?'snap':''}
        className=""
        >
          { !isScreenMD?(
          <motion.div
          initial={{x:0,y:-20}}
          animate={{x:['0%','10%','20%','44%'],y:[-20,-20,-20,0]}}
          transition={{
            times:[0,.3,.8,1],
            duration:5,
            delay:2,
            
          }}
          className=""
          >
          <h1 className="text-white font-black text-7xl">SKILLS</h1></motion.div>):
          (<motion.div
            initial={{x:0,y:-20}}
            animate={{x:['0%','10%','20%','50%'],y:[-20,-20,-20,0]}}
            transition={{
            times:[0,.3,.8,1],
            duration:3,
            delay:2,
            
          }}
          ><h1 className="text-white font-black text-xl mt-5">SKILLS</h1></motion.div>)
          }


          <motion.hr
          initial={{scaleX:0}}
          animate={{scaleX:1}}
          transition={{
            duration:1,
            delay:7
          }}
          ></motion.hr>
          <audio id="audio" src="https://www.google.com/logos/fnbx/thanos/thanos_snap_sound.mp3"  ></audio>
          
            
          <motion.div 
            className="mt-4"><button className='mx-10 text-white font-black shadow-2xl px-2 p-2 mb-2 bg-blue-500 rounded-md hover:scale-125 transition-all' onClick={()=>{setButtonSnap(!buttonSnap)}}>Snap?</button></motion.div>
            <motion.div 
            animate={{x:[null,100,0]}}
            transition={{duration:3,times:[0,.2,1] ,repeat:Infinity}}
            className="bg-blue-500 p-4 w-1 mx-10 my-5"></motion.div>
            
            <motion.div 

               initial={{ x: "100%" }}
               style={{ left:10 }}
               animate={{ rotateX:360, skewY:10
               
              }}
               transition={{
                 duration:5,
                 repeat:Infinity
               }}
            className="bg-slate-500 p-4 w-1 mx-10 my-5"></motion.div>

            
        </motion.div>
        <motion.div 
        initial={{y:buttonSnap?-1000:0}}
        animate={{y:buttonSnap?0:-1000}}
        transition={{duration:0.8}}
        className={` ${isSpace?'bg-space':snap?'bg-snap':'bg-time'} h-20 w-20 hover:cursor-pointer mx-40 relative`} onClick={()=>{animateScript(event);snapClicker();}}>

        </motion.div>
        <motion.div


        initial={{
          y:-500,
          scaleY:0
        }}
        animate={{
          y:0,
          scaleY:1
        }}
        transition={{
          duration:0.5,
          delay:9
        }}
        >
        <motion.div
        variants={snapVariant}
        initial={snap?'initTime':'initSnap'}
        animate={snap?'snap':''}
        className =''
        >
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        loop={false}
        className={`mySwiper ${isScreenMD?'scale-75' :'scale-100'} w-[360px] h-[520px] rounded-full`}
      >
        <div><SwiperSlide><Card1></Card1></SwiperSlide></div>
        <SwiperSlide><Card2></Card2></SwiperSlide>
        <SwiperSlide><Card3></Card3></SwiperSlide>
        <SwiperSlide><Card4></Card4></SwiperSlide>

      </Swiper>
        </motion.div>

        </motion.div>

        </motion.div>
        

      </>
            )
}

export default skills;