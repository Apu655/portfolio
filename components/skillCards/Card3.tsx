import { motion } from "framer-motion";
import { useState } from "react";
import { GrNext } from "react-icons/gr";
export default function Card2() {

    const [swipe,setSwipe] = useState(false)

  return (
    <div className="font-serif">
      <motion.div
        className="select-none hover:cursor-pointer w-[360px] h-[520px] bg-gradient-to-br from-gray-100 to-gray-400 rounded-l-xl rounded-r-xl shadow-xl border py-2 px-5 items-center absolute "
      />
      <motion.div
      >
        
          <div className="absolute z-10">
            <div className="mx-5 text-md">
              <div className="pt-4">
                <motion.img
                  className="border rounded-lg w-[320px] h-[190px]"
                  src="/frameworks.png"
                  alt=""
                />
              </div>
              <h1 
              className="mx-2 mt-5 text-[30px]">Frameworks</h1>
            </div>
            <div className="mt-5 mx-7 ">
            {!swipe?(
            <div
            >
            <p className="my-3 font-bold">Tailwind CSS</p>
            <div className=" border border-blue-500 rounded-2xl w-50 h-2 relative">
          
            <motion.span 
            style={{ originX: 0}}
            initial={{
              scaleX:0
            }}
            animate={{
              scaleX:1
            }}
            transition={{
              duration:1
            }}
          className="bg-gradient-to-br from-red-200 to-blue-700 h-full w-[85%] rounded-2xl absolute"></motion.span></div>
          <p className="my-3 font-bold">Bootstrap</p>
          <div className=" border border-blue-500 rounded-2xl w-50 h-2 relative">
          
            <motion.span 
            style={{ originX: 0}}
            initial={{
              scaleX:0
            }}
            animate={{
              scaleX:1
            }}
            transition={{
              duration:1
            }}
          className="bg-gradient-to-br from-red-200 to-blue-700 h-full w-[92%] rounded-2xl absolute"></motion.span></div>
          <p className="my-3 font-bold">Next JS</p>
          <div className=" border border-blue-500 rounded-2xl w-50 h-2  relative">
          
            <motion.span 
            style={{ originX: 0}}
            initial={{
              scaleX:0
            }}
            animate={{
              scaleX:1
            }}
            transition={{
              duration:1
            }}
          className="bg-gradient-to-br from-red-200 to-blue-700 h-full w-[60%] rounded-2xl absolute"></motion.span>
          </div>
          </div>
          ):(
          <motion.div 
          initial={{scale:0}}
          animate={{scale:1}}
          className="h-[156px]">
            <p className="my-3 font-bold">Django</p>
            <div className=" border border-blue-500 rounded-2xl w-50 h-2  relative">
          
          <motion.span 
          style={{ originX: 0}}
          initial={{
            scaleX:0
          }}
          animate={{
            scaleX:1
          }}
          transition={{
            duration:1
          }}
        className="bg-gradient-to-br from-red-200 to-blue-700 h-full w-[63%] rounded-2xl absolute"></motion.span>
        </div>

        <p className="my-3 font-bold">Framer Motion</p>
            <div className=" border border-blue-500 rounded-2xl w-50 h-2  relative">
          
          <motion.span 
          style={{ originX: 0}}
          initial={{
            scaleX:0
          }}
          animate={{
            scaleX:1
          }}
          transition={{
            duration:1
          }}
        className="bg-gradient-to-br from-red-200 to-blue-700 h-full w-[70%] rounded-2xl absolute"></motion.span>
        </div>




          </motion.div>
          )
             }
          <div className="absolute ml-36 mt-8 text-lg">
              <button onClick={()=>{setSwipe(!swipe)}}><GrNext></GrNext></button>
          </div>
            </div>
          </div>
      </motion.div>
    </div>
  );
}