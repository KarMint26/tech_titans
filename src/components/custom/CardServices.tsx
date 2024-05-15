import Image from "next/image";
import React from "react";

const dataServices = [
  {
    name: "UI & UX Design",
    image: "/assets/services/ui.png",
    description: `UI/UX design encompasses the creation of user interfaces that are both aesthetically pleasing and easy to use.`,
  },
  {
    name: "Mobile Application",
    image: "/assets/services/mobile.png",
    description: `Mobile apps are software applications designed to run on smartphones and other portable devices.`,
  },
  {
    name: "Web Application",
    image: "/assets/services/web.png",
    description: `Web development is the work involved in developing a website for the Internet or an intranet.`,
  },
];
function CardServices() {
  return dataServices.map((data, index) => (
    <div key={index} className="p-5 max-w-96 dark:text-white dark:bg-gray-700 dark:border-slate-900 bg-white border border-slate-300 text-slate-800 rounded-xl flex justify-center items-center flex-col">
      <div className="p-5 rounded-full bg-main flex items-center justify-between">
        <Image src={data.image} alt={data.name} width={50} height={50} />
      </div>

      <h3 className="text-xl font-semibold my-5">{data.name}</h3>

      <p className="text-center">{data.description}</p>
    </div>
  ));
}

export default CardServices;
