"use client"

import Shopprofilecard from '@/content/Home/projectfilecard';
import React, { useState, useEffect } from 'react';
import { MOC_PROJECT } from '@/constant/project';

const Shops = () => {

    const [hasOffers, setHasOffers] = useState(false);

    useEffect(() => {
        const offersData = localStorage.getItem('offersData');
        setHasOffers(!offersData);
    }, []);

    return (
        <div className='w-full'>
            <div className="pt-10">
                {hasOffers && (
                    <div className="flex max-md:px-2 items-center gap-3 md:text-[24px] text-[20px] leading-[28px] md:leading-[32px] font-semibold ">
                        <h2 className="text-basecolor">
                            The projects I have worked on so far.
                        </h2>
                    </div>
                )}
                <Shopprofilecard projectData={MOC_PROJECT} />
            </div>
        </div>
    )
}

export default Shops