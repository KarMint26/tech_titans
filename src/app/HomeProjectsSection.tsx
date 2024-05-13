import CardProject from "@/components/custom/CardProject";
import {
  ChevronRight,
  ChevronRightIcon,
  ChevronsLeftRightIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

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
      <Link
        href="/projects"
        className="px-3 py-3 rounded-full m-auto bg-white inline-flex justify-between gap-3 items-center font-semibold"
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
