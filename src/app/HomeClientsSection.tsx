import Image from "next/image";
import React from "react";

function HomeClientsSection() {
  return (
    <div className="w-full mt-5 md:mt-10 lg:mt-15  mb-10 md:mb-15 lg:mb-20">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold">
        Our <span className="text-main">Client</span>
      </h2>
      <div className="w-full flex items-center overscroll-x-auto md:px-10 lg:px-14 justify-between flex-wrap my-3 sm:my-5 md:my-8 lg:my-10">
        <Image
          src="/assets/home/clients/tokped.png"
          alt="tokped"
          className="w-16 p-2 md:p-0 sm:w-1/6 lg:w-1/12 my-5 grayscale hover:grayscale-0"
          width={150}
          height={100}
        />
        <Image
          src="/assets/home/clients/shopee.png"
          alt="shopee"
          className="w-16 p-2 md:p-0 sm:w-1/6 lg:w-1/12 my-5 grayscale hover:grayscale-0"
          width={150}
          height={100}
        />
        <Image
          src="/assets/home/clients/microsoft.png"
          alt="microsoft"
          className="w-16 p-2 md:p-0 sm:w-1/6 lg:w-1/12 my-5 grayscale hover:grayscale-0"
          width={150}
          height={100}
        />
        <Image
          src="/assets/home/clients/google.png"
          alt="google"
          className="w-16 p-2 md:p-0 sm:w-1/6 lg:w-1/12 my-5 grayscale hover:grayscale-0"
          width={150}
          height={100}
        />
        <Image
          src="/assets/home/clients/netflix.png"
          alt="netflix"
          className="w-16 p-2 md:p-0 sm:w-1/6 lg:w-1/12 my-5 grayscale hover:grayscale-0"
          width={150}
          height={100}
        />
      </div>
    </div>
  );
}

export default HomeClientsSection;
