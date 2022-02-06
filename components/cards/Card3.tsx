import { motion } from "framer-motion";
import { useState } from "react";

const FlipVarient = {
  before: { rotateY: -180,transition:0.3 },
  after: { rotateY: 0,transition:0.3 }
};

const OpacityVarient = {
  initial: { opacity: 0, transition: 0.8 },
  animate: { opacity: 1, transition: 0.8 },
};
export default function Card1() {
  const [flip, setFlip] = useState(false);

  return (
    <div className="font-serif">
      <motion.div
      onClick={() => {
        setFlip(!flip);
      }}
        animate={flip ? "before" : "after"}
        variants={FlipVarient}
        transition={{ duration: 0.4 }}
        className="select-none hover:cursor-pointer w-[305px] h-[420px] bg-gradient-to-br from-gray-100 to-gray-400 rounded-l-xl rounded-r-xl shadow-xl border py-2 px-5 items-center absolute "
      />
      <motion.div
        initial="initial"
        animate="animate"
        className="relative h-96 w-72 hover:cursor-pointer select-none"
        onClick={() => {
          setFlip(!flip);
        }}
      >
        {!flip ? (
          <div className="absolute z-10">
            <div className="ml-20 text-md">
              <div className="pt-4">
                <motion.img
                  variants={OpacityVarient}
                  className="border rounded-full w-36 h-36"
                  src="/skills2.jpg"
                  alt=""
                />
              </div>
              <motion.h1 
              variants={OpacityVarient}
              className="mx-8 mt-5 text-[30px]">Skills</motion.h1>
            </div>
            <motion.div className="mt-5 mx-5" variants={OpacityVarient}>
              <motion.p className="text-md">
                I am currently pursuing Computer Science and Engineering degree
                at BRAC University. I love web-developing and exchanging ideas and experience with people.
              </motion.p>
            </motion.div>
          </div>
        ) : (
          <motion.div
            variants={OpacityVarient}
            className="mt-5 mx-2 text-lg text-slate-800 absolute z-10"
          > 
          <h4 className="mb-5 text-xl">Skills: <hr className="mt-2"></hr></h4>
          <div className="py-3">
          <p className="my-3 font-bold w-64 text-base">Programming</p>
          <div className=" border border-blue-500 rounded-2xl w-50 h-2 relative ">
          
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
          className="bg-gradient-to-br from-red-200 to-blue-700 h-full w-[55%] rounded-2xl absolute"></motion.span></div>
          </div>

          <div className="py-3">
          <p className="my-3 font-bold text-base">Web Development</p>
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
          className="bg-gradient-to-br from-red-200 to-blue-700 h-full w-[70%] rounded-2xl absolute"></motion.span></div>
          </div>
          
          <div className="py-3">
          <p className="my-3 font-bold text-base">Leadership and Communication</p>
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
          className="bg-gradient-to-br from-red-200 to-blue-700 h-full w-[65%] rounded-2xl absolute"></motion.span></div>
          </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}