"use client"
import React, { useState } from 'react'
import { AboutData } from '@/constant/About'
import CloseIcon from "@mui/icons-material/Close";
import Image from 'next/image'

const Page = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleViewClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-[calc(100vh-86px)] xl:w-[calc(100vw-350px)] max-sm:w-full flex flex-col items-center mt-[86px] max-sm:px-5 md:px-20">
      <div className="max-sm:w-full max-sm:flex hidden justify-center items-center max-sm:pt-5">
        <div className="w-full flex flex-col items-center">
          <div className='w-8/12'>
            <Image
              src="/constdata/pic.jpg"
              alt="product image"
              height={100}
              width={100}
              layout="responsive"
              className="rounded-full border-2"
              style={{ borderColor: "rgb(9, 160, 192)" }}
            />
          </div>
          <a
            href="/constdata/AranResume.pdf"
            download="Aran_Choudhary_Resume.pdf"
            className='w-full'
          >
            <div className="download-button border-2 text-[18px] mt-5 border-black bg-black text-white flex justify-center py-2 rounded-md">
              Download Resume
            </div>
          </a>
          <button
            onClick={handleViewClick}
            className="text-[18px] mt-5 w-full font-[18px] flex justify-center py-2 rounded-lg bg-blue-600 text-white"
          >
            View Resume
          </button>
        </div>
      </div>

      <div className='w-full mt-5 pb-10'>
        <h4 className='text-2xl xl:text-4xl'>I&apos;m</h4>
        <h6 className='text-3xl xl:text-5xl pb-2'>Aran Choudhary</h6>
        <p className='text-[20px] max-sm:text-[16px]'>{AboutData?.para1}</p>
        <p className='text-[20px] max-sm:text-[16px] pt-3'>{AboutData?.para2}</p>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-[90%] max-h-[90vh] bg-white p-5 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 text-black text-lg"
            >
              <CloseIcon />
            </button>
            <div className="w-full h-full">
              <iframe
                src="/constdata/AranResume.pdf"
                className="w-full h-full"
                style={{ border: "none" }}
                title="PDF Viewer"
              ></iframe>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Page