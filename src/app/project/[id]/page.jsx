"use client"

import React from 'react'
import { Card } from '@mui/material';
import Shopprofilecard from '@/content/Home/projectfilecard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import 'swiper/css';
import 'swiper/css/pagination';
import { MOC_PROJECT } from '@/constant/project';
import { MOC_PROJECTS } from '@/constant/Projects';

const Page = ({ params }) => {
    const { id } = params;
    const Carddata = MOC_PROJECT?.filter(project => project.id === id);
    const Projectdata = MOC_PROJECTS.filter(projects => projects.id === id);
    const Data = Projectdata[0].data;
    const techArray = Data?.techstackused.split(",");

    return (
        <div className='w-full min-h-screen pt-[80px] flex flex-col items-center'>
            <div className='w-[100%]'>
                <div className="w-[100%] h-40 flex justify-center items-center max-w-screen">
                    <h2 className='text-6xl font-bold'>{Data?.ProjectName}</h2>
                </div>
            </div>
            <div className='md:w-11/12 max-sm:w-[95%] '>
                <div className='w-full flex md:flex-row flex-col gap-10'>
                    <Card className='md:w-[50%] rounded-lg h-full pb-10 w-full '>
                        <div className='mt-10'>
                            <div className='flex flex-col items-center'>
                                <h2 className='text-[21.49px] font-bold'>
                                    TechStack Used
                                </h2>
                                <div className='justify-center w-full py-3 px-3 flex flex-wrap gap-3'>
                                    {techArray?.map((item, indx) => (
                                        <button key={indx} className='rounded-[21.49px] text-[14px] font-medium text-[#026DF0] bg-[#EAF5FF] border-2 px-3 py-2'>
                                            {item}
                                        </button>
                                    ))}
                                </div>
                                <div className='px-4 w-full flex flex-col gap-1'>
                                    <h2 className='font-medium text-[18px]'>About Project</h2>
                                    {Data?.aboutData?.map((item, index) => (
                                        <div className='flex gap-2 mb-2'>
                                            <ArrowForwardIcon />
                                            <h6 className='text-[14.33px] font-medium text-[#4D4D4D]'>{item?.about}</h6>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Card>
                    <div className='md:w-[50%] w-full rounded-lg'>
                        <Shopprofilecard projectData={Carddata} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page