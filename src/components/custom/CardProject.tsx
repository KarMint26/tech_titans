import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsBrowserChrome } from "react-icons/bs";
import { FaArrowRight, FaMobileScreen } from "react-icons/fa6";
import { IoLogoFigma } from "react-icons/io5";

function CardProject({
  name,
  image,
  category,
  link,
}: {
  name: string;
  image: string;
  category: string;
  link: string;
}) {
  return (
    <div className="w-full md:w-[30rem] p-3">
      <Image
        src={image}
        alt="project 1"
        width={300}
        height={200}
        className="w-full object-center bg-center bg-cover overflow-hidden"
      />
      <div className="flex items-center justify-between py-5">
        <div className="text-white">
          <h4 className="text-xl md:text-2xl font-semibold mb-5 mt-5">
            {name}
          </h4>
          <div className="flex items-center gap-3">{category == "Website" ? <BsBrowserChrome /> : category == "mobile" ? <FaMobileScreen /> : <IoLogoFigma />} {category.toUpperCase()}</div>
        </div>
        <Link
          href={link}
          className="p-3 rotate-[300deg] transition-all animate-in hover:rotate-0 rounded-full bg-white text-center flex items-center justify-center text-3xl dark:text-gray-800"
        >
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default CardProject;
