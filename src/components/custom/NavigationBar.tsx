"use client";

import Image from "next/image";
import React from "react";
import ListItem from "./ListItem";
import { FaUsersGear } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdOutlineMiscellaneousServices, MdWork } from "react-icons/md";
import { Menu, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DarkModeBtn from "./DarkModeBtn";

type NavbarProps = {
  activeLink: string | any;
  activeNav: boolean;
  setActiveNav: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navbar({
  activeLink,
  activeNav,
  setActiveNav,
}: NavbarProps) {
  return (
    <React.Fragment>
      {/* Mobile and Tablet Version */}
      <div
        onClick={() => setActiveNav(false)}
        className={`bg-background/20 backdrop-blur-sm lg:hidden w-[30%] sm:w-[40%] h-screen fixed right-0 top-0 z-[1000] transition-all duration-300 ${
          activeNav
            ? "opacity-100 -translate-x-0"
            : "opacity-0 -translate-x-[1200px]"
        }`}
      ></div>
      <div
        className={`popup-menu flex lg:hidden flex-col pt-16 fixed left-0 top-0 h-screen w-[70%] sm:w-[60%] sm:text-xl bg-background z-[1000] space-y-8 transition-all duration-300 ${
          activeNav
            ? "opacity-100 -translate-x-0"
            : "opacity-0 -translate-x-[1200px]"
        }`}
      >
        <Button
          variant="outline"
          size="icon"
          className={`flex lg:hidden fixed top-6 right-[30px] ${
            activeNav
              ? "opacity-100 -translate-x-0"
              : "opacity-0 -translate-x-[600px]"
          }`}
          onClick={() => setActiveNav(false)}
        >
          <XCircle color="#128EF0" />
        </Button>
        <Link
          href="/"
          onClick={() => setActiveNav(false)}
          className="list-menu text-main flex py-2 pl-[15%] sm:pl-[35%] items-center space-x-2 sm:space-x-4 uppercase font-semibold"
        >
          <FaHome className="text-lg" />
          <div>Home</div>
        </Link>
        <Link
          href="/service_and_project"
          onClick={() => setActiveNav(false)}
          className="list-menu text-main flex py-2 pl-[15%] sm:pl-[35%] items-center space-x-2 sm:space-x-4 uppercase font-semibold"
        >
          <MdWork className="text-lg" />
          <div>Service & Projects</div>
        </Link>
        <Link
          href="/about"
          onClick={() => setActiveNav(false)}
          className="list-menu text-main flex py-2 pl-[15%] sm:pl-[35%] items-center space-x-2 sm:space-x-4 uppercase font-semibold"
        >
          <FaUsersGear className="text-lg" />
          <div>About</div>
        </Link>
      </div>

      <div className="fixed top-0 w-full h-fit px-4 py-3 bg-background z-[999] flex justify-between items-center">
        <div className="nav-brand flex justify-center items-center">
          <Button
            variant="outline"
            size="icon"
            className="relative flex translate-x-2 lg:hidden lg:translate-x-0 z-10"
            onClick={() => setActiveNav((prev) => !prev)}
          >
            <Menu />
          </Button>
          <Link href="/">
            <Image
              src={"/assets/icons/ICON.png"}
              width={200}
              height={200}
              alt="explore nias icon"
              className="scale-[0.65] sm:scale-75 lg:scale-100 -translate-x-4 sm:translate-x-0"
            />
          </Link>
        </div>
        {/* Desktop Version */}
        <div className="nav-list-menu lg:flex justify-center items-center space-x-4 hidden">
          <ListItem
            activeLink={activeLink}
            text={"Home"}
            href="/"
            icon={<FaHome className="text-xl" />}
          />
          <ListItem
            activeLink={activeLink}
            text={"Service & Project"}
            href="/service_and_project"
            icon={<MdWork className="text-xl" />}
          />
          <ListItem
            activeLink={activeLink}
            text={"About"}
            href="/about"
            icon={<FaUsersGear className="text-xl" />}
          />
        </div>

        <div className="side-menu flex justify-center items-center space-x-3 lg:space-x-5">
          {/* Toggle Dark Mode */}
          <DarkModeBtn />
        </div>
      </div>
    </React.Fragment>
  );
}
