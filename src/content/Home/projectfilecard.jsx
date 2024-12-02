import { Card } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SiVercel } from "react-icons/si";
import LanguageIcon from '@mui/icons-material/Language';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';

const Shopprofilecard = ({ projectData }) => {

    return (
        <div className="flex flex-col gap-5">
            {projectData?.map((item, index) => {
                const shopId = item.data.id;

                return (
                    <Card
                        key={index}
                        className="flex flex-col gap-3 px-5 py-3 rounded-xl"
                    >
                        <div className="flex gap-3 items-center">
                            <a href={`/project/${shopId}`} className=''>
                                <h2 className="text-basecolor text-[18px] leading-[24px] font-medium">
                                    {item?.data?.projectName}
                                </h2>
                                <h3 style={{color: "#0D74F1"}} className="text-[14px] leading-[24px] font-medium py-1">
                                    {item?.data?.tags}
                                </h3>
                            </a>
                        </div>
                        <div className='w-full'>
                            <Swiper
                                spaceBetween={16}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                keyboard={true}
                                cssMode={true}
                                modules={[Navigation, Pagination, Keyboard]}
                                className="w-[100%] rounded-lg"
                            >
                                <SwiperSlide className="flex items-center justify-center">
                                    <video autoPlay loop src={item?.data?.video} />
                                </SwiperSlide>

                                {item?.data?.assets?.map((pic, id) => (
                                    <SwiperSlide key={id} className="flex h-[446px] !w-[592px] items-center justify-center">
                                        <img src={pic?.link} alt="sliderimage" className="object-contain w-full h-full" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div style={{gap: '20px'}} className="flex items-center">
                            {item?.data?.github && (
                                <a href={item?.data?.github} style={{ backgroundColor: '#000000' }} className="flex py-2 gap-2 px-3 text-white rounded-md items-center">
                                    <GitHubIcon />
                                    Github
                                </a>
                            )}
                            {item?.data?.vercel && (
                                <a href={item?.data?.vercel} style={{ backgroundColor: '#000000' }} className="flex py-2 gap-2 px-3 text-white rounded-md items-center">
                                    <SiVercel />
                                    Vercel
                                </a>
                            )}
                            {item?.data?.www && (
                                <a href={item?.data?.www} style={{ backgroundColor: '#2563EB' }} className="flex py-2 gap-2 px-3 text-white rounded-md items-center">
                                    <LanguageIcon />
                                    WWW
                                </a>
                            )}
                        </div>
                    </Card>
                );
            })}
        </div>
    );
};

export default Shopprofilecard;