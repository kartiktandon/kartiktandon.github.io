import profilePic from "../assets/profilepic.jpg";
import { HERO_CONTENT } from "../constants/index.js";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
};

const childrenVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        {/* Profile Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:py-8">
            <motion.img
              src={profilePic}
              alt="Kartik Tandon"
              className="border border-stone-900 rounded-3xl"
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>

        {/* Text and Description Section */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="flex flex-col items-center lg:items-start mt-10">
              <motion.h2
                variants={childrenVariants}
                className="pb-2 text-4xl tracking-tighter lg:text-8xl"
              >
                Kartik Tandon
              </motion.h2>
              <motion.span
                variants={childrenVariants}
                className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
              >
                Full Stack Developer
              </motion.span>
              <motion.p
                variants={childrenVariants}
                className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
              >
                {HERO_CONTENT}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
