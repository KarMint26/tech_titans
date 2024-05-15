import CardProject from "@/components/custom/CardProject";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

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
    name: "Optimal Mom - Pregnancy tracker",
    image: "/assets/services/mobile/om.png",
    category: "mobile",
    link: "https://www.figma.com/design/8bTd1pt60GPKtphKQIh53C/Optimal-Mom---Pregnancy-tracker---moms-community---learning-center---baby-growth-tracker---Ecommers-(Community)?node-id=0%3A1&t=8qHNsjLjAQ034Jtg-1",
  },
  {
    id: 3,
    name: "Tech Titans IT solution",
    image: "/assets/services/uiux/tt.jpg",
    category: "UIUX",
    link: "https://www.figma.com/design/UynMczGUHYMd8cS0vMXjT6/TechTitans---IT-Solutions?node-id=0%3A1&t=DNVZezD95beSfNPg-1",
  },
];

function HomeProjectsSection() {
  return (
    <div className="w-full h-fit bg-main py-10 md:py-10 lg:py-15 px-8 sm:px-10 lg:px-14 flex flex-col justify-center">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
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
        {dataProjects.map((data) => (
          <CardProject
            name={data.name}
            category={data.category}
            link={data.link}
            image={data.image}
            key={data.id}
          />
        ))}
      </div>
      <Link
        href="/service_and_project"
        className="px-3 py-3 rounded-full m-auto bg-white inline-flex justify-between gap-3 items-center font-semibold dark:text-gray-800"
      >
        <span className="pl-3">See More Project</span>{" "}
        <div className="p-4 text-lg bg-main rounded-full text-white">
          <ChevronRightIcon />
        </div>
      </Link>
    </div>
  );
}

export default HomeProjectsSection;
