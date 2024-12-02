"use client";

import { usePathname } from "next/navigation";
import Sidebarprovider from "@/content/provider/sidebarprovider";

const ClientLayout = ({ children }) => {
  const pathname = usePathname();

  const isProfilePage = pathname.startsWith("/project");

  return (
    <>
      <div className="md:flex hidden relative">
        {!isProfilePage && (
          <div className="sticky-container">
            <Sidebarprovider />
          </div>
        )}
        <div className={!isProfilePage ? "md:!ml-[250px]" : "w-full"}>
          {children}
        </div>
      </div>
      <style jsx>{`
      .sticky-container {
        position: sticky;
        top: 80px;
        left: 0px;
        width: 250px;
        height: calc(100vh - 80px);
        margin-top: 80px;
        }
      }
    `}</style>
    </>
  );
};

export default ClientLayout;