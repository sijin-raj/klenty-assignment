import React, { useState } from "react";
import Button from "../Button/Button";
import NavLink from "../Navbar/Navlink";
import Image from "next/image";
import Logo from "../../Assets/Images/logo.png";

const Layout = ({ children }) => {

  return (
    <>
      <div
        id="layout"
        className="w-screen h-screen overflow-y-auto overflow-x-hidden"
      >
        {/* NavBar */}
        <nav className="fixed w-full h-20 mx-auto flex items-left bg-white opacity-100 z-10">
          <div className="w-4/5 mx-auto flex justify-between items-center">
            {/* Logo */}
            <a
              href="/"
              className="group inline-flex items-center space-x-1 cursor-pointer"
            >
              <Image
                style={{ width: 10, height: 10 }}
                src={Logo}
                alt="Klentylogo"
              />
            </a>

            {/* Links */}
            <div className="hidden xl:flex flex-row items-center -ml-10 justify-between space-x-5">
              <NavLink to="/" text="Platform" />
              <NavLink to="/" text="Pricing" />
              <NavLink to="/" text="Acceleration" />
              <NavLink to="/" text="Resources" />
              <NavLink to="/" text="Customer Stories " />
            </div>

            {/* Button */}
            <div className="hidden xl:block font-semibold">
              <div className="flex flex-row space-x-2 items-center justify-center">
                <NavLink to="/" text="Log in " />
                <button className="bg-transparent hover:bg-primary text-primary text-sm font-semibold hover:text-white py-3 px-3 border border-primary hover:border-transparent rounded-md">
                  SCHEDULE DEMO
                </button>
                <Button text="TRY for free" to="#" />
              </div>
            </div>

            {/*  button for mobile view */}
            <div
              className="block xl:hidden"
              onClick={() => setShowSideBar(true)}
            >
              <Button text="TRY for free" to="#" />
            </div>
          </div>
        </nav>

        <main className="w-full pt-10 xl:pt-20 h-screen mx-auto overflow-x-hidden overflow-y-auto bg-white">
          {children}
        </main>

      </div>
    </>
  );
};

export default Layout;
