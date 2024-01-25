import React, { useState } from 'react';
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';
// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiRedux, SiPostgresql, SiExpress, SiPostman, SiReact } from 'react-icons/si';
import { RiSignalTowerLine } from 'react-icons/ri';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Front-End Web',
        // eslint-disable-next-line react/jsx-key
        icons: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaBootstrap />, <SiTailwindcss />, <FaReact />, <SiNextdotjs />, <SiRedux />],
      },
      {
        title: 'Back-End Web',
        // eslint-disable-next-line react/jsx-key
        icons: [<FaNodeJs />, <SiExpress />, <SiPostgresql />, <SiPostman />],
      },
      {
        title: 'Mobile Development',
        // eslint-disable-next-line react/jsx-key
        icons: [<SiReact aria-label='React Native' />, <RiSignalTowerLine />],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Sales Admin - PT. Mitra Alas Selaras',
        stage: '2023 (3 months)',
      },
      {
        title: 'Head of Warehouse - PT. Mitra Alas Selaras',
        stage: '2020 - 2023',
      },
      {
        title: 'Warehouse helper - PT. Mitra Alas Selaras',
        stage: '2018 - 2020',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Fullstack Web & Mobile Developer - PijarCamp',
        stage: '2024',
      },
      {
        title: 'Computer Science Bachelor - Pamulang University',
        stage: '2023',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className='h-full bg-primary/30 mt-10 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate={'show'} exit={'hidden'} className='hidden xl:flex absolute bottom-0 -left-[200px]'>
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2 variants={fadeIn('right', 0.2)} initial='hidden' animate={'show'} exit={'hidden'} className='h2'>
            Captivating <span className='text-accent'>stories</span> birth magnificent designs.
          </motion.h2>
          <motion.p variants={fadeIn('right', 0.4)} initial='hidden' animate={'show'} exit={'hidden'} className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 z-10'>
            When I was in college, I worked as a sales admin. Since I graduated, I decided to switch careers to become a software developer so I attended a bootcamp to deepen my skills. The world of programming is my passion so I am very
            enthusiastic and committed to giving the best in every project I work on.
          </motion.p>
          {/* counters */}
          <motion.div variants={fadeIn('right', 0.6)} initial='hidden' animate={'show'} exit={'hidden'} className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={1} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of experience</div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={7} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished projects</div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div variants={fadeIn('left', 0.4)} initial='hidden' animate={'show'} exit={'hidden'} className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, i) => {
              return (
                <div
                  onClick={() => setIndex(i)}
                  key={i}
                  className={`${
                    index === i && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 z-30`}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((items, i) => {
              return (
                <div key={i} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{items.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div className=''>{items.stage}</div>
                  {/* icons */}
                  <div className='flex gap-x-4'>
                    {items.icons?.map((items, i) => {
                      return (
                        <div className='text-2xl text-white' key={i}>
                          {items}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
