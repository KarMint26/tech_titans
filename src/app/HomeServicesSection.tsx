import CardCountProjcets from "@/components/custom/CardCountProjcets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HomeServicesSection() {
  return (
    <div className="w-full h-fit px-8 sm:px-10 lg:px-14 py-12 sm:py-16 bg-main text-white">
      <div className="flex flex-col items-center justify-between gap-5 py-5 sm:flex-row">
        <div className="w-full text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl capitalize font-semibold my-3 sm:my-5">
            Various Services <br />{" "}
            <span className="mt-3">From tech titans</span>
          </h2>
          <p className="w-full mb-5 md:w-[19rem] lg:w-[30rem]">
            we have professional services in the form of IT consultant services,
            UI UX Designer, Mobile App, Website{" "}
          </p>
          <Link
            href="/service_and_project"
            className="px-5 py-3 bg-white text-black mt-5 rounded-xl font-semibold"
          >
            Read more
          </Link>
        </div>
        <Image
          src="/assets/home/img-hero2.png"
          alt="hero image"
          className="mt-3 lg:my-10 scale-100"
          width={700}
          height={600}
        />
      </div>
      <CardCountProjcets />
    </div>
  );
}

export default HomeServicesSection;
