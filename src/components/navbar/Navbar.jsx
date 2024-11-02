import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Toolbar } from "primereact/toolbar";
import { useMobile } from "../../hooks/useMoblie";
import SideBar from "./SideBar";

function Navbar() {
  const { pathname } = useLocation();
  const [navbarBg, setNavbarBg] = useState(false);
  const { isUnder } = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      title: "Página Inicial",
      url: "/",
    },
    {
      title: "Filmes",
      url: "/filmes",
    },
    {
      title: "Séries",
      url: "/series",
    },
    isUnder && {
      title: "Pesquisar",
      url: "/explore",
    },
  ];

  return (
    <Toolbar
      className={`fixed top-0 left-0 w-full transition-all duration-300 flex items-center justify-between px-4 lg:px-10 py-0 z-50 ${
        navbarBg ? "bg-gray-800 shadow-lg " : "bg-transparent"
      }`}
      start={
        <div className="flex items-center max-sm:gap-2 gap-2">
          {isUnder ? (
            <SideBar items={navItems} />
          ) : (
            <>
              <Link to="/">
                <img
                  src="/assets/white_logo.svg"
                  alt="movies_logo"
                  className="h-16"
                />
              </Link>
              <div className="w-px h-6 border border-gray-200 mx-2" />
              {navItems.map((i, index) => {
                const currentPage = pathname === i.url;
                return (
                  <Link
                    key={index}
                    to={i.url}
                    className={`${currentPage && "bg-gray-800"} hover:bg-gray-200 hover:text-black rounded-xl py-2 px-4 transition-colors duration-200`}
                  >
                    {i.title}
                  </Link>
                );
              })}
            </>
          )}
        </div>
      }
      center={
        isUnder && (
          <Link to="/">
            <img
              src="/assets/white_logo.svg"
              alt="movies_logo"
              className="h-16"
            />
          </Link>
        )
      }
      end={
        <Link
          to="/explore"
          className={`${pathname === "/explore" && "bg-gray-800"} hover:bg-gray-200 hover:text-black rounded-xl py-2 px-4 transition-colors duration-200 flex gap-2 items-center`}
        >
          Pesquisar
          <i className="pi pi-search" />
        </Link>
      }
    />
  );
}

export default Navbar;
