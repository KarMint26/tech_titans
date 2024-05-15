"use client";

import CardCountProjcets from "@/components/custom/CardCountProjcets";
import CardProject from "@/components/custom/CardProject";
import CardServices from "@/components/custom/CardServices";
import Image from "next/image";
import React from "react";
import { BiChat } from "react-icons/bi";
import { BsBrowserChrome, BsWhatsapp } from "react-icons/bs";

// name="Educational Platform"
// category="Web Design / UIUX Design"
// link="https://www.youtube.com/watch?v=1fp_gdNKjV4"
// image="/assets/services/p-ep.png"
const dataProjects = [
  {
    id: 1,
    name: "Wonderful Yogyakarta",
    image: "/assets/services/web/wy.png",
    category: "Website",
    link: "https://wonderful-yogyakarta.techtitans.id",
  },
  {
    id: 2,
    name: "Tranquilmind",
    image: "/assets/services/web/t.png",
    category: "Website",
    link: "https://www.tranquilmind.my.id",
  },
  {
    id: 3,
    name: "Explorenias",
    image: "/assets/services/web/e.png",
    category: "Website",
    link: "https://explorenias.my.id",
  },
  {
    id: 4,
    name: "SquareUp - Digital Product Studio",
    image: "/assets/services/mobile/su.png",
    category: "mobile",
    link: "https://www.figma.com/design/CGfkw0fFCGAJOwJrFT0E1G/SquareUp---Digital-Product-Studio-(Community)?node-id=3%3A53&t=K1UKfuJjHG3fg4HA-1",
  },
  {
    id: 5,
    name: "Go umkm",
    image: "/assets/services/mobile/gu.png",
    category: "mobile",
    link: "https://www.figma.com/design/d7boZ5o5auyLLk4cJTGTrK/GO-UMKM?node-id=1641%3A5443&t=LM3vgYeZvU6wE6RJ-1",
  },
  {
    id: 6,
    name: "Optimal Mom - Pregnancy tracker",
    image: "/assets/services/mobile/om.png",
    category: "mobile",
    link: "https://www.figma.com/design/8bTd1pt60GPKtphKQIh53C/Optimal-Mom---Pregnancy-tracker---moms-community---learning-center---baby-growth-tracker---Ecommers-(Community)?node-id=0%3A1&t=8qHNsjLjAQ034Jtg-1",
  },
  {
    id: 7,
    name: "Tech Titans IT solution",
    image: "/assets/services/uiux/ttt.png",
    category: "UIUX",
    link: "https://www.figma.com/design/UynMczGUHYMd8cS0vMXjT6/TechTitans---IT-Solutions?node-id=0%3A1&t=DNVZezD95beSfNPg-1",
  },
  {
    id: 8,
    name: "calmMind",
    image: "/assets/services/uiux/cm.png",
    category: "UIUX",
    link: "https://www.figma.com/design/h0RK5GMnLLQmh7dxZ5JrrG/CalmMindFix?node-id=0%3A1&t=LEDt8YpunXOXV4qx-1",
  },
  {
    id: 9,
    name: "Kasyr",
    image: "/assets/services/uiux/ks.png",
    category: "UIUX",
    link: "https://www.figma.com/design/kHghspELxoT4TwW01UiHyg/Kasyr?node-id=0%3A1&t=0KavraniICMQch9u-1",
  },
];
const ServiceAndProjectPage = () => {
  return (
    <>
      {/* hero */}
      <div className="w-full h-fit px-8 sm:px-10 lg:px-14 pt-[135px] sm:pt-[150px] lg:pt-[180px] pb-12 sm:pb-16 flex items-center gap-2 flex-col md:flex-row">
        <Image
          src={"/assets/services/heroService.gif"}
          alt="services"
          width={500}
          height={500}
          className="w-full lg:scale-90 object-center md:w-1/2"
        />
        <div className="w-full md:w-1/2">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-center md:text-left font-semibold">
            How To Order At <span className="text-main">Tech Titans</span>
          </h2>

          <ol className="relative border-s mt-10 border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <BsBrowserChrome />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Open the Tech Titans website in your browser
              </h3>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <BsWhatsapp />
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Click the WhatsApp button on the bottom right side
              </h3>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <BiChat />
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Discuss your desired project with us on whatsapp
              </h3>
            </li>
          </ol>
        </div>
      </div>

      {/* services */}
      <div className="w-full h-fit px-8 sm:px-10 lg:px-14">
        <div className="w-full my-5 md:my-10">
          <p className="text-center font-semibold text-base sm:text-xl lg:text-2xl">Services</p>
          <h2 className="text-xl md:text-3xl text-center lg:text-4xl font-semibold">
            <span className="text-main">Start Exploring.</span> Good things are
            <br className="sm:inline-block lg:hidden hidden" /> waiting for you.
          </h2>
        </div>
        <div className="w-full flex gap-5 lg:gap-10 flex-wrap justify-center">
          <CardServices />
        </div>
      </div>
      <div className="w-full mt-10 md:mt-20 py-10 md:py-20 px-8 sm:px-10 lg:px-14 bg-blue-900 relative">
        <CardCountProjcets customClass="md:-top-[9rem] relative" />

        {/* Projects */}
        <h2
          id="projects"
          className="text-center mt-10 md:mt-0 text-2xl md:text-3xl lg:text-4xl font-semibold text-white"
        >
          Our Project
        </h2>

        <div className="flex mx-auto my-5 justify-center w-full md:w-[30rem]">
          <p className="text-white text-center">
            Explore our IT consulting services, from UI/UX Design, mobile
            applications and website applications. Here are our public version
            projects
          </p>
        </div>
        <div className="w-full flex flex-wrap my-5 md:my-10 gap-5 justify-center">
          {/* card projects */}
          {dataProjects.map((data) => (
            <CardProject
              key={data.id}
              name={data.name}
              category={data.category}
              link={data.link}
              image={data.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceAndProjectPage;
