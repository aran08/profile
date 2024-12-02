'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';

const Topslider = ({ data }) => {

    const router = useRouter()
    return (
        <div className="w-full h-[196px]">
            <Swiper
                spaceBetween={16}
                loop={true}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return '';
                    },
                }}
                height={5000}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="swiper !h-full"
                breakpoints={{
                    320: {
                        slidesPerView: 4,
                    },
                    640: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                    1440: {
                        slidesPerView: 6,
                    },
                }}
            >
                {data?.map((item, index) => (
                    <SwiperSlide key={index} className="">
                        <div className='flex flex-col items-center w-full rounded-xl'>
                            <Box className='' sx={{ borderRadius: '16px', overflow: 'hidden' }}>
                                <Image src={item?.link} alt='sliderimage' width={196} height={196} className='object-cover'/>
                            </Box>
                            <h2 className='max-sm:text-sm'>{item?.Name}</h2>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Topslider;