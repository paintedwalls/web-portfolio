import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { BsArrowRight, BsGithub, BsDownload } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Food Recipes Web',
          path: '/food-recipes.png',
          linkDemoProject: 'https://food-recipes-app-fe.vercel.app/',
          linkGithub: 'https://github.com/rikimuhammadasli021299/food-recipes-app-fe',
          emailDemo: 'user01@gmail.com',
          password: 'Password: user01',
        },
        {
          title: 'Hire Job Web',
          path: '/hire-project.png',
          linkDemoProject: 'https://peworldin.netlify.app/',
          linkGithub: 'https://github.com/rikimuhammadasli021299/HireJob-FE',
          emailDemo: 'user01@gmail.com',
          password: 'Password: user01',
        },
        {
          title: 'Ankasa Web',
          path: '/ankasa-web.png',
          linkDemoProject: 'https://ankasa-ticketing-silk.vercel.app/',
          linkGithub: 'https://github.com/rikimuhammadasli021299/ankasa-fe',
          emailDemo: 'user_demo@gmail.com',
          password: 'Userdemo@123',
        },
        {
          title: 'Food Recipes Mobile',
          path: '/food-recipes-mobile.png',
          linkDemoProject: 'https://github.com/rikimuhammadasli021299/FoodRecipesMobile/releases/download/v0.0.1/food-recipes.apk',
          linkGithub: 'https://github.com/rikimuhammadasli021299/FoodRecipesMobile',
          emailDemo: 'user01@gmail.com',
          password: 'Password: user01',
        },
      ],
    },
    {
      images: [
        {
          title: 'Food Recipes API',
          path: '/food-recipes-api.png',
          linkDemoProject: 'https://documenter.getpostman.com/view/30796012/2s9YypEiMo#intro',
          linkGithub: 'https://github.com/rikimuhammadasli021299/food-recipe-api',
          emailDemo: 'user01@gmail.com',
          password: 'Password: user01',
        },
        {
          title: 'Hire Job API',
          path: '/hire-job-api.png',
          linkDemoProject: 'https://documenter.getpostman.com/view/30796012/2s9YypEiWc',
          linkGithub: 'https://github.com/rikimuhammadasli021299/hire-job-be',
          emailDemo: 'user01@gmail.com',
          password: 'Password: user01',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((items, i) => {
        return (
          <SwiperSlide key={i}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4'>
              {items.images.map((image, i) => {
                return (
                  <div key={i} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt='' />
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-1 group-hover:md:-translate-y-5 group-hover:xl:-translate-y-15 transition-all duration-300'>
                        <Link href={`${image.linkDemoProject}`} target='blank' className='delay-100 font-semibold text-center cursor-pointer'>
                          {image.title}
                        </Link>
                        <div className='delay-100 hidden md:flex flex-col'>Account Demo</div>
                        <div className='delay-100 hidden md:flex flex-col'>Email: {image.emailDemo}</div>
                        <div className='delay-100 hidden md:flex flex-col'>Passowrd: {image.password}</div>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em] mt-5 cursor-pointer'>
                          {/* title part 1 */}
                          <Link href={image.linkDemoProject} target='black' className='delay-100'>
                            {image.title === 'Food Recipes Mobile' ? 'DOWNLOAD' : 'LIVE'}
                          </Link>
                          {/* title part 2 */}
                          <Link href={image.linkDemoProject} target='black' className=' translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            {image.title === 'Food Recipes Mobile' ? 'APK' : 'PROJECT'}
                          </Link>
                          {/* icon */}
                          <Link href={image.linkDemoProject} target='black' className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            {image.title === 'Food Recipes Mobile' ? <BsDownload /> : <BsArrowRight />}
                          </Link>
                        </div>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em] mt-2 cursor-pointer'>
                          {/* title part 1 */}
                          <Link href={image.linkGithub} target='blank' className='delay-100'>
                            DETAIL
                          </Link>
                          {/* title part 2 */}
                          <Link href={image.linkGithub} target='blank' className=' translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            PROJECT
                          </Link>
                          {/* icon */}
                          <Link href={image.linkGithub} target='blank' className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsGithub />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
