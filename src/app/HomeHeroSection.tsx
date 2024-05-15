import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomeHeroSection = () => {
  return (
    <React.Fragment>
      <div className="w-full flex justify-between items-center flex-col sm:flex-row">
        <div className="md:w-[150rem] lg:w-auto">
          <p className="uppercase font-semibold">Welcome to tech titans</p>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl uppercase font-semibold my-3 sm:my-5">
            Best For <br /> <span className="text-main">it solutions</span>
          </h1>
          <p className=" mb-7 capitalize">
            many project we have done with our IT solutions
          </p>
          <div className="flex gap-2 sm:gap-5">
            <Link
              href={"/about"}
              className="px-5 py-3 bg-main text-white rounded-xl font-semibold"
            >
              Read more
            </Link>
            <Link
              href={"/service_and_project"}
              className="text-main px-5 py-3 font-semibold flex gap-2"
            >
              See Our Projects <ArrowRight />
            </Link>
          </div>
        </div>
        <div className="md:w-[100rem] lg:w-auto flex gap-5 items-center">
          <Image
            src="/assets/home/decoration-arrow.png"
            alt="hero image"
            className="hidden lg:block"
            width={300}
            height={50}
          />
          <Image
            src="/assets/home/hero-home.png"
            alt="hero image"
            className="scale-90 sm:scale-[0.85] my-10 sm:my-0 lg:scale-100"
            width={600}
            height={600}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeHeroSection;
