import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// icons
import { RxDesktop, RxArrowTopRight, RxMobile } from 'react-icons/rx';
import { GoDatabase } from 'react-icons/go';

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Front-End Web',
    description: 'Turn your ideas into visually appealing and user-friendly websites.',
  },
  {
    icon: <GoDatabase />,
    title: 'Back-End Web',
    description: 'Experience smooth functionality, strong databases, and peak performance for your website.',
  },
  {
    icon: <RxMobile />,
    title: 'Mobile Development',
    description: 'Showcase your uniqueness through modern and user-friendly mobile apps, boosting your digital presence.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      // pagination={true}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((items, i) => {
        return (
          <SwiperSlide key={i}>
            <div className='bg-[rgba(65,47,123,0.15)] xl:h-[300px] md:h-[320px] rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{items.icon}</div>
              {/* title & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{items.title}</div>
                <p className='max-w-[350px] leading-normal'>{items.description}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
