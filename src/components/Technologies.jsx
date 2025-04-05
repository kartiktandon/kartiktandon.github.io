import { RiReactjsLine } from "react-icons/ri";
import {RiPhpFill} from "react-icons/ri";
import {RiNodejsLine} from "react-icons/ri";
import {RiGithubFill} from "react-icons/ri";
import {FaDatabase } from "react-icons/fa";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {
      y: -10, // Initial position of the icon
    },
    animate: {
      y: [10, -10], // Bouncing effect
      transition: {
        duration: duration, // Duration of each bounce cycle
        ease: "linear", // Smooth, linear transition
        repeat: Infinity, // Repeat the animation indefinitely
        repeatType: "reverse", // Reverse the direction each time it repeats
      },
    },
  });

const Technologies = () => {
  return (
    <div className="pb-24">
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl"> Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
         initial="initial"
         animate="animate"
        variants={iconVariants(2.5)}
        >
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
           variants={iconVariants(2.5)}
            className="p-4">
            <RiPhpFill className="text-7xl text-purple-400" />
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
           variants={iconVariants(2.5)}
           className="p-4">
            <RiNodejsLine className="text-7xl text-green-400" />
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
           variants={iconVariants(2.5)}
           className="p-4">
            <RiGithubFill className="text-7xl text-black-400" />
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
           variants={iconVariants(2.5)}
            className="p-4">
            <FaDatabase className="text-7xl text-blue-400" />
            </motion.div>
        </motion.div>
    </div>
  );
}

export default Technologies;