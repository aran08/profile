"use client";

import { useState } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { TiStarOutline } from "react-icons/ti";
import Topslider from "@/content/Home/topslider";
import Shops from "@/components/home/shops";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { TechStack } from "@/constant/project";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="min-h-screen w-full pt-[80px] flex justify-center items-center">
        <div className="w-full h-full flex md:px-5">
          <div className="md:w-[calc(74vw-200px)] pt-10 w-full min-h-screen md:px-[34px]">
            <div className="w-full max-md:px-5 py-2">
              <div className="flex items-center gap-3 md:text-[24px] text-[20px] leading-[28px] md:leading-[32px] font-semibold">
                <TiStarOutline />
                <h2 className="text-basecolor py-2">Tech Stack</h2>
              </div>
              <Topslider data={TechStack} />
            </div>
            <Shops />
          </div>

          <div className="md:w-[300px] md:flex justify-center hidden pt-16 sticky top-1 h-screen">
            <div className="w-[200px]">
              <Image
                src="/constdata/pic.jpg"
                alt="product image"
                height={200}
                width={150}
                layout="responsive"
                className="rounded-full border-2"
                style={{ borderColor: "rgb(9, 160, 192)" }}
              />
              <a
                href="/constdata/AranResume.pdf"
                download="Aran_Choudhary_Resume.pdf"
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
        </div>
      </div>

      {/* Modal for viewing PDF */}
      {isModalOpen && (
        <div
          className="fixed inset-0 mt-10 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-3xl p-0 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              onClick={handleCloseModal}
              className="absolute top-3 right-32 opacity-85 text-white text-lg"
            >
              <CloseIcon />
            </div>
            <div className="w-full h-[80vh] overflow-scroll">
              <iframe
                src="/constdata/AranResume.pdf"
                className="w-full h-full bg-white"
                style={{ border: "none" }}
                title="PDF Viewer"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
