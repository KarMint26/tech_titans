"use client";

import CardCountProjcets from "@/components/custom/CardCountProjcets";
import CardProject from "@/components/custom/CardProject";
import CardServices from "@/components/custom/CardServices";
import Image from "next/image";
import React from "react";
import { BsBrowserChrome, BsWhatsapp } from "react-icons/bs";
import { FaInternetExplorer } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";

const ServiceAndProjectPage = () => {
  return (
    <>
      <div className="w-full h-fit px-8 sm:px-10 lg:px-14 pt-[135px] sm:pt-[150px] lg:pt-[180px] pb-12 sm:pb-16 flex items-center gap-2 flex-col md:flex-row">
        <Image
          src={"/assets/services/heroServices.png"}
          alt="services"
          width={500}
          height={500}
          className="w-full lg:scale-90 object-center md:w-1/2"
        />
        <div className="w-full md:w-1/2">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-center font-semibold">
            How To Order At <span className="text-main">Tech Titans</span>
          </h2>

          <ol className="relative border-s mt-5 border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <BsBrowserChrome />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Masuk Website Tech Titans pada browser
              </h3>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <BsWhatsapp />
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Klik tombol WhatsApp
              </h3>
            </li>
          </ol>
        </div>
      </div>

      <div className="w-full h-fit px-8 sm:px-10 lg:px-14">
        <div className="w-full my-5 md:my-10">
          <p className="text-center font-semibold">Servcies</p>
          <h2 className="text-xl md:text-3xl text-center lg:text-4xl font-semibold">
            <span className="text-main">Start Exploring.</span> Good things are
            waiting for you.
          </h2>
        </div>
        <div className="w-full flex gap-5 lg:gap-10 flex-wrap justify-center">
          <CardServices />
        </div>
      </div>
      <div className="w-full mt-10 md:mt-20 py-10 md:py-20 px-8 sm:px-10 lg:px-14 bg-main relative">
        <CardCountProjcets customClass="md:-top-[9rem] relative" />

        <h2 className="text-center mt-10 md:mt-0 text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
          Our Project
        </h2>

        <div className="flex mx-auto my-5 justify-center w-full md:w-[30rem]">
          <p className="text-white text-center">
            Explore our IT consulting services, from UI/UX Design, mobile
            application and website application. Let's create amazing digital
            experiences together.
          </p>
        </div>
        <div className="w-full flex flex-wrap my-5 md:my-10 gap-5 justify-center">
          <CardProject
            name="Educational Platform"
            category="Web Design / UIUX Design"
            link="https://www.youtube.com/watch?v=1fp_gdNKjV4"
            image="/assets/services/p-ep.png"
          />

          <CardProject
            name="Travel App Design"
            category="Mobile Application"
            link="https://www.youtube.com/watch?v=1fp_gdNKjV4"
            image="/assets/services/p-tad.png"
          />

          <CardProject
            name="Personal Page"
            category="Web Application"
            link="https://www.youtube.com/watch?v=1fp_gdNKjV4"
            image="/assets/services/p-pp.png"
          />
        </div>
      </div>
    </>
  );
};

export default ServiceAndProjectPage;
