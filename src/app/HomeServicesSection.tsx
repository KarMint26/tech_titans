import ItemBoxService from "@/components/custom/ItemBoxService";
import Image from "next/image";
import React from "react";
import { FaRegListAlt } from "react-icons/fa";
import { GiPencilBrush } from "react-icons/gi";
import { SlScreenSmartphone } from "react-icons/sl";
import { TbWorld } from "react-icons/tb";

function HomeServicesSection() {
  return (
    <div className="w-full h-fit px-8 sm:px-10 lg:px-14 py-12 sm:py-16 bg-main text-white">
      <div className="flex flex-col items-center justify-between gap-5 py-5 sm:flex-row">
        <div className="w-full text-center sm:text-left">
          <h2 className="text-3xl leading-6 sm:text-4xl lg:text-5xl capitalize font-semibold my-3 sm:my-5">
            Various Services <br />{" "}
            <span className="mt-5">From tech titans</span>
          </h2>
          <p className="w-full md:w-[19rem] lg:w-[30rem]">
            we have professional services in the form of IT consultant services,
            UI UX Designer, Mobile App, Website{" "}
          </p>
          <button className="px-5 py-3 bg-white text-black mt-5 rounded-xl font-semibold">
            Read more
          </button>
        </div>
        <Image
          src="/assets/home/img-hero2.png"
          alt="hero image"
          className="scale-90 sm:scale-75 md:my-10 sm:my-0 lg:scale-100"
          width={700}
          height={600}
        />
      </div>
      <div className="w-full bg-white flex justify-between items-center px-6 py-4 rounded-xl flex-wrap mt-5 gap-5">
        <ItemBoxService
          name="UI/UX Design"
          count={25}
          icon={<GiPencilBrush />}
        />

        <ItemBoxService
          name="Mobile"
          count={15}
          icon={<SlScreenSmartphone />}
        />

        <ItemBoxService name="Website" count={35} icon={<TbWorld />} />

        <ItemBoxService
          name="Total Project"
          count={70}
          icon={<FaRegListAlt />}
        />
      </div>
    </div>
  );
}

export default HomeServicesSection;
