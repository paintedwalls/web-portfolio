import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

const Home = () => {
  return (
    <div className='bg-black/60 h-full'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-black/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* title */}
          <motion.h1 variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden' className='h1'>
            Fullstack Web and <br /> <span className='text-accent'>Mobile Developer</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit='hidden' className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
            {`I'm`} a creative problem solving enthusiast, with a constantly growing love for app development. The world of programming is my passion so I am very enthusiastic and committed to giving the best in every project I work on.
          </motion.p>
          {/* btn */}
          <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </motion.div>
          <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex'>
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        {/* bg img*/}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        {/* particles */}
        <div className='flex justify-center xl:justify-end'>
          <ParticlesContainer />
        </div>
        {/* avatar img */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='w-full h-full max-w-[500px] max-h-[500px] absolute -bottom-32 lg:bottom-0 lg:right-[7%]'
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
