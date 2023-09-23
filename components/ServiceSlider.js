// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

// import required modules
import { FreeMode, Pagination } from 'swiper';

// service data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Sistemas Operacionais',
    description: 'Consigo trabalhar com os principais sistemas operacionais do mercado, como Windows e Linux.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Arquiteura de Software',
    description: 'Nessa área, consigo trabalhar com as principais arquiteturas de software, como MVC e MVVM.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Essa é a área que mais me identifico, consigo trabalhar com as principais Techs, como JavaScript, TypeScript, Python, Nestjs, entre outras.',
  },
  {
    icon: <RxReader />,
    title: 'Documentation',
    description: 'Essa é umas das minhas habilidades preciosas, consigo documentar projetos com as principais ferramentas, como Swagger, Postman, entre outras.',
  },
  {
    icon: <RxRocket />,
    title: 'Entrega rápida e eficaz',
    description: 'Consigo entregar projetos de forma rápida e eficaz, com qualidade e segurança.',
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
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
