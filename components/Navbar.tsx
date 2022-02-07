import Link from 'next/link'
import { useState } from 'react'
import {motion} from 'framer-motion'
import {FaFacebookF,FaGithub,FaLinkedinIn} from "react-icons/fa";
import {BsFillSuitDiamondFill} from 'react-icons/bs';
import { reverse } from 'dns';

type Props ={
    snap:boolean
    stoneBar:boolean
}
const Navbar = (props:Props) => {

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
          
          transition:{delay:2}
      
        },
        'time':{
          opacity:[0,0.2,0.5,0.8,1],
          transition:{delay:2}
        }
      }

    let [open,setOpen]= useState(false);
    const menuVariants = {
        closed:{
            y:0,
            duration:3000
        },
        opened:{
            y:456,
            duration:3000
        },
        
    }

    const navVariant={
        animeInitial :{
                opacity:0,
                scale:0,
                y:-20
            },
            anime:{
                y:0,
                opacity:1,
                scale:1
                
            },
        snap:{
            opacity:[1,0.8,0.5,0.2,0],
                
                
            transition:{delay:5,duration:5}
            
              },
            
        }
    
    
    const clickHandler = ()=>{
        
        setOpen(!open)
        console.log(open)
    }

    return ( 
        
            <nav className=" w-full font-serif">
                <div className=" py-2 shadow-lg px-10 mx-auto font-bold text-white lg:block hidden">
                    <div className="flex ">
                    <ul className="flex space-x-3">
                        <motion.li 
                        initial={{rotateY:0, scale:1}}
                        animate={{rotateY:[180,360], scale:1}}
                        transition={{duration:2, repeat:Infinity, repeatType:'reverse'}}
                        className="px-4 py-2"><Link href='/'>
                            <a href="#"><img src='A.png' className='border rounded-full h-7 w-7'></img></a></Link></motion.li>
                    </ul>
                    <ul className="flex flex-row space-x-3 px-7 ">
                        <Link href='/'>
                            
                            <motion.a
                            href="#"
                            variants={navVariant}
                            initial='animeInitial'
                        animate="anime"
                        transition={{
                            duration:0.2
                        }}
                        >
                            <li className="hover:text-black hover:bg-sky-400 hover:rounded-3xl transition-all duration-50 ease-linear p-2">HOME</li>
                            </motion.a>
                            </Link>

                        <Link href="/skills"><motion.a 
                        href="#"
                        variants={navVariant}
                        initial='animeInitial'
                        animate={props.snap?"snap":"anime"}
                        transition={{
                            duration:0.3
                        }}
                        className="hover:text-black hover:bg-sky-400 hover:rounded-3xl transition-all duration-50 ease-linear p-2"><li>SKILLS</li></motion.a></Link>
                        
                        <Link href="#">
                            <motion.a 
                        variants={navVariant}
                        initial='animeInitial'
                        animate="anime"
                        transition={{
                            duration:0.4
                        }}
                        href="#" className="hover:text-black hover:bg-sky-400 hover:rounded-3xl transition-all duration-50 ease-linear p-2"><li>PROJECTS</li></motion.a></Link>
                        <Link href="/#">
                            <motion.a 
                            href="#"
                            variants={navVariant}
                            animate={props.snap?"snap":"anime"}
                            initial='animeInitial'
                        transition={{
                            duration:0.5
                        }}
                        className="hover:text-black hover:bg-sky-400 hover:rounded-3xl transition-all duration-50 ease-linear p-2"><li>ABOUT</li></motion.a></Link>
                    </ul>
                    {props.stoneBar?
                    (
                    <motion.ul 
                    
                    animate={{
                        
                        scale:1,
                    }}
                    initial={{
                        scale:0
                    }}
                    className="flex ml-auto py-2">
                    <motion.li
                    ><button className="px-2 text-xl font-bold relative text-blue-600 hover:text-blue-400 hover:scale-125 transition-all"><BsFillSuitDiamondFill></BsFillSuitDiamondFill></button></motion.li>
                    
                    </motion.ul>
                    ):
                    (
                    <motion.ul 
                    
                    animate={{
                        
                        scale:1,
                    }}
                    initial={{
                        scale:0
                    }}
                    className="flex ml-auto py-2 gap-x-4">
                    <li className="hover:scale-125 transition-all"><a href="https://www.facebook.com/mohammad.apu.20th/" target="blank"><FaFacebookF/></a></li>
                    <li className="hover:scale-125 transition-all"><a href="https://github.com/Apu655" target="blank"><FaGithub/> </a></li>
                    <li className="hover:scale-125 transition-all"><a href="https://www.linkedin.com/in/apu-islam-081015196/" target="blank"><FaLinkedinIn/></a></li>
                    </motion.ul>
                    )}
                    </div>
                    
                </div>

                {/* Mobile Menu bar*/}
                <div className="font-bold text-black lg:hidden">
                    <div className="flex flex-col">
                        <div className=" py-2 shadow-lg z-40 px-4 flex flex-row justify-between bg-white">
                            <motion.div
                            initial={{rotateY:0, scale:1}}
                            animate={{rotateY:[180,360], scale:1}}
                            transition={{duration:2, repeat:Infinity, repeatType:'reverse', repeatDelay:.5}}
                            className="p-2">
                                <Link href="/"><a href='/' className=""><img src='A.png' className='border rounded-full h-7 w-7'></img></a></Link>
                            </motion.div>
                            <div>
                            <button className="p-2 z-20" onClick={clickHandler}>
                                <motion.svg xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6" fill="none" 
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" 
                            strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </motion.svg>
                            </button>
                            </div>
                        </div>
                        
                        <motion.div
                        variants={menuVariants} 
                        animate={
                            open?"opened":"closed"
                        }
                        transition={{
                            type:"spring",
                            stiffness:90,
                            
                        }}
                        initial={'closed'}
                        className={`flex flex-col  pl-2 text-black space-y-4 py-5 z-20 bg-white absolute w-full top-[-400px]`}
                        >
                            <Link href="/"><a href="#" className="hover:text-black hover:bg-teal-400 hover:rounded-3xl transition-all duration-50 ease-linear p-2">HOME</a></Link>
                            <Link href="/skills"><a href="#" className="hover:text-black hover:bg-teal-400 hover:rounded-3xl transition-all duration-50 ease-linear p-2">SKILLS</a></Link>
                            <Link href="#"><a href="#" className="hover:text-black hover:bg-teal-400 hover:rounded-3xl transition-all duration-50 ease-linear p-2">ABOUT</a></Link>
                        </motion.div>
                    </div>
                </div>
                {/* End Mobile Menu */}
            </nav>
        
     );
}
 
export default Navbar;