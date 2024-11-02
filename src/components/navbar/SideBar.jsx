import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Link, useLocation } from "react-router-dom";

function SideBar({ items = [] }) {
  const [openSideBard, setOpenSideBar] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <div className="card flex justify-center">
        <Button
          icon="pi pi-bars"
          onClick={() => setOpenSideBar(true)}
          rounded
          outlined
          className="cursor-pointer text-white"
        />
        <Sidebar
          visible={openSideBard}
          onHide={() => setOpenSideBar(false)}
          content={
            <div className="min-h-screen flex flex-col items-center justify-start mt-14">
              <div className="flex justify-center items-center mb-10">
                <img src="/assets/white_logo.svg" className="w-28" alt="logo" />
              </div>
              <div className="flex flex-col gap-4 items-center justify-center text-left w-full">
                {items.map((i, index) => {
                  const currentPage = pathname === i.url;
                  return (
                    <Link
                      key={index}
                      to={i.url}
                      className={`${currentPage && "bg-gray-900"} w-40 text-center hover:bg-gray-200 hover:text-black rounded-xl py-2 px-4 transition-colors duration-200`}
                    >
                      {i.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          }
        ></Sidebar>
      </div>
    </>
  );
}

export default SideBar;
