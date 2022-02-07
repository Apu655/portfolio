import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {motion} from 'framer-motion'
import {useState} from 'react'
import { useMediaQuery } from '@material-ui/core'
import Card1 from '../components/cards/Card1'
import Card2 from '../components/cards/Card2'
import Card3 from '../components/cards/Card3'
import { GrNext } from "react-icons/gr";


export default function Home() {

  let isScreenMD = useMediaQuery("(max-width:1024px)");
  const [nameClick,setNameClick]= useState(false)
  const [flip,setFlip]= useState(false)
  const [nextCard,setNextCard] = useState(0)

  const cardVariant={
    'nameClicked':{

    }
  }



  return (
    <div 
    className="">
      <Head>
        <title>APU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <motion.main 
      
      
      className={`flexflex-col h-screen justify-between bg-slate-900 ${nameClick?'bg-opacity-90':'bg-opacity-100'} transition-all duration-500 ease-in text-white font-serif`}>
        <Navbar stoneBar={false} snap={false}></Navbar>
      
      <motion.div
      exit={{
        scale:0,
        opacity:[0.8,0.6,0.4,0]
      }}
      transition={{duration:0.5}}>
        <div className="pt-20 px-32 text-3xl font-black">
          <motion.h1>Welcome</motion.h1>
          <h1>I AM</h1>
          <motion.button onClick={()=>{setNameClick(!nameClick)}} className=" font-black shadow-2xl px-2 border p-2 mb-2 bg-blue-600 rounded-md"
          whileHover={{
            scale:1.2
          }}
          initial={{
            x:-20,
            skewX:-50,
          }}
          animate={{
            x:0,
            skewX:0,
          }}
          transition={{duration:0.3}}
          >APU ISLAM</motion.button>
        </div>
        
        </motion.div>
        <div className='text-black'>
        {!isScreenMD?(
        <motion.div 
        initial={{
          y:nameClick?0:-2000,
        }}
        animate={{ 
          y:nameClick?0:-2000,
        }}
        exit={{opacity:0}}
        transition={{duration:3, type:"spring",stiffness:50}}
        className="grid  gap-y-10 gap-x-2 lg:grid-cols-3 lg:mt-10 px-14 place-items-center mt-5">
          

          
            <motion.div
            whileHover={{scale:1.2}}
            className=""
            ><Card1></Card1></motion.div>
            
            <motion.div
            className=""
            whileHover={{scale:1.2,
              z: 2,}}
            ><Card2></Card2></motion.div>
            <motion.div
            className=""
            whileHover={{
              scale:1.2,
              z: 1.2,
            }}><Card3></Card3></motion.div>
          
          
        </motion.div>):(<motion.div 
        initial={{
          y:nameClick?0:-2000,
        }}
        animate={{ 
          y:nameClick?0:-2000,
        }}
        exit={{opacity:0}}
        transition={{duration:3, type:"spring",stiffness:50}}
        className="grid  gap-y-10 gap-x-2 lg:grid-cols-3 lg:mt-10 px-14 place-items-center mt-10">

           <motion.div
            className="">

              <motion.div>
                {nextCard==0?
                (
              <Card1></Card1>):
              (
                <div>
                {nextCard==1?
                  (<Card2></Card2>):
                  (<Card3></Card3>)
                }
                </div>
              )

            
                }
              </motion.div>
                <div className="mt-10 mx-[8.5rem] text-lg bg-gradient-to-br from-gray-100 to-transparent rounded">
                  <button className="px-3"
                  onClick={()=>{setNextCard((nextCard+1)%3)}}><GrNext></GrNext></button>
                </div>
            </motion.div>
            
          
          </motion.div> )}
          </div>
        
        
      
      </motion.main>


    </div>
  )
}
