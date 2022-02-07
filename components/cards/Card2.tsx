import { motion } from "framer-motion";
import { useState } from "react";

const FlipVarient:any = {
  before: { rotateY: -180,transition:0.3 },
  after: { rotateY: 0,transition:0.3 }
};

const OpacityVarient:any = {
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
        className="select-none hover:cursor-pointer w-[305px] h-[420px] bg-gradient-to-br from-gray-100 to-gray-300 rounded-l-xl rounded-r-xl shadow-xl border py-2 px-5 items-center absolute "
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
                  src="/education.jpg"
                  alt=""
                />
              </div>
              <h1 className="mx-2 mt-5 text-[30px]">Education</h1>
            </div>
            <motion.div className="mt-5 mx-5" variants={OpacityVarient}>
              <motion.p className="text-md">
                I am currently pursuing Computer Science and Engineering deree
                at BRAC University. Hopefully by 2024, I will be graduated.
              </motion.p>
            </motion.div>
          </div>
        ) : (
          <motion.div
            variants={OpacityVarient}
            className="mt-5 mx-2 text-lg text-slate-800 absolute z-10"
          >
            <div>
            <h4 className="mb-5 text-xl">Educational Details: <hr className="mt-2"></hr></h4>
            <h5 className="mb-2 text-slate-900">2022 (present)-</h5>
            <h5 className="mb-2 text-sm">BRAC UNIVERSITY</h5>
            <h5 className="mb-2 text-sm">BSc in Computer Science and Engineering</h5>
            </div>
            <div className="my-2">
            <h5 className="mb-2 text-slate-900">2019-</h5>
            <h5 className="mb-2 text-sm">B.A.F Shaheen College</h5>
            <h5 className="mb-2 text-sm">Higher Secondary School Certificate</h5>
            </div>
            <div className="my-2">
            <h5 className="mb-2 text-slate-900">2017-</h5>
            <h5 className="mb-2 text-sm">B.A. Higher Secondary School</h5>
            <h5 className="mb-2 text-sm">Secondary School Certificate</h5>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}