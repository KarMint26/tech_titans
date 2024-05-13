import Image from "next/image";
import Link from "next/link";
import React from "react";

type ourTeamsType = {
  id: number;
  name: string;
  position: string;
  img_url: string;
};

const ourTeams: ourTeamsType[] = [
  {
    id: 1,
    name: "Henry Schultz",
    position: "Chief Executive Office",
    img_url: "/assets/about/team-1.png",
  },
  {
    id: 2,
    name: "Hollie Mccormick",
    position: "Head Of IT Department",
    img_url: "/assets/about/team-2.png",
  },
  {
    id: 3,
    name: "Nataniel Webb",
    position: "Project Manager",
    img_url: "/assets/about/team-3.png",
  },
  {
    id: 4,
    name: "Olly Weaver",
    position: "IT Consultant",
    img_url: "/assets/about/team-4.png",
  },
];

const AboutPage = () => {
  return (
    <React.Fragment>
      <div className="w-full h-fit px-8 sm:px-10 lg:px-14 pt-[100px] sm:pt-[120px] pb-12">
        {/* About */}
        <section
          id="about"
          className="about flex justify-center lg:justify-between items-center flex-col-reverse lg:flex-row lg:gap-16"
        >
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl">
              <span className="text-main">About</span> Us
            </h1>
            <p className="text-sm sm:text-base lg:text-[1.15rem]">
              We at Tech Titans are committed to providing innovative and
              high-quality technology solutions to our customers. As a trusted
              partner, we help our customers achieve their business goals
              through the utilization of the latest technology. With a focus on
              developing long-term relationships, we build solid partnerships
              with each of our customers. We continue to drive innovation in the
              development of our products and services, ensuring that we are
              always at the forefront of the technology industry.
            </p>
          </div>
          <Image
            src={"/assets/about/robot.gif"}
            alt="hero-about"
            width={500}
            height={500}
            className="scale-110"
            priority
          />
        </section>

        {/* Why Tech Titans */}
        <section
          id="why_techtitans"
          className="flex justify-center lg:justify-between items-center flex-col-reverse lg:flex-row-reverse gap-8 sm:gap-10 lg:gap-16 pt-10 sm:pt-14 lg:pt-16"
        >
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl">
              <span className="text-main">Why</span> Tech Titans?
            </h1>
            <p className="text-sm sm:text-base lg:text-[1.15rem]">
              Tech Titans is a technology company that focuses on IT
              (Information Technology) solutions. The company offers a range of
              products and services that include software development, data
              analytics, cyber security solutions, and IT consulting. As one of
              the leaders in the IT industry, Tech Titans has been a partner to
              many companies in overcoming various technological challenges.
              <br /> <br />
              The products and services offered by Tech Titans not only focus on
              software and IT infrastructure solutions, but also on innovations
              such as the use of artificial intelligence (AI), advanced data
              analytics, and mobile application development. The company has an
              expert team of software developers, network engineers, data
              scientists, and other IT professionals who are dedicated to
              providing the best solutions to their clients.
            </p>
          </div>
          <Image
            src={"/assets/icons/FAVICON.png"}
            alt="hero-techtitans"
            width={400}
            height={400}
            priority
          />
        </section>

        {/* Visi */}
        <section
          id="visi"
          className="flex justify-center lg:justify-between items-center flex-col-reverse lg:flex-row gap-8 sm:gap-10 lg:gap-16 pt-10 sm:pt-14 lg:pt-16"
        >
          <div className="flex flex-col gap-3 bg-slate-200 dark:bg-slate-700 rounded-xl p-4">
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl"><span className="text-main">Our</span> Vision</h1>
            <p className="text-sm sm:text-base lg:text-[1.15rem]">
              To be a leading IT company in providing the best and innovative
              technology solutions to meet customer needs. Making customers the
              top priority in our services. Making existing problems into good
              and innovative solutions for the future.
            </p>
          </div>
          <Image
            src={"/assets/about/visi.gif"}
            alt="hero-visi"
            width={500}
            height={500}
            priority
          />
        </section>

        {/* Misi */}
        <section
          id="misi"
          className="flex justify-center lg:justify-between items-center flex-col-reverse lg:flex-row-reverse gap-8 sm:gap-10 lg:gap-16 pt-10 sm:pt-14 lg:pt-16"
        >
          <div className="flex flex-col gap-3 bg-slate-200 dark:bg-slate-700 rounded-xl p-4">
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl"><span className="text-main">Our</span> Mission</h1>
            <p className="text-sm sm:text-base lg:text-[1.15rem]">
              Provide innovative and high-quality technology solutions. Become a
              trusted partner for customers in achieving their business goals
              through technology. Develop and maintain long-term relationships
              with our customers. Make customers satisfied with our services.
            </p>
          </div>
          <Image
            src={"/assets/about/misi.gif"}
            alt="hero-misi"
            width={500}
            height={500}
            priority
          />
        </section>
      </div>

      {/* Our Team Section */}
      <section
        id="our_team"
        className="our_team w-full h-fit pt-10 sm:pt-14 lg:pt-16 flex flex-col justify-center items-center bg-blue-900 pb-12 sm:pb-16"
      >
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
          Our Teams
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 sm:mt-8 lg:mt-10 gap-5 sm:gap-7 lg:gap-5">
          {ourTeams.map((data) => (
            <div
              key={data.id}
              className="card-team flex flex-col justify-center items-center gap-3 sm:gap-4 w-fit h-fit"
            >
              <Image
                src={data.img_url}
                alt="team-1"
                width={300}
                height={300}
                className="shadow-lg rounded-xl sm:rounded-2xl scale-95 sm:scale-100 hover:grayscale-[50] transition-all duration-300 hover:scale-105"
              />
              <div className="rounded-full bg-white p-3 px-10 sm:px-14 text-2xl text-black font-semibold">
                {data.name}
              </div>
              <div className="position font-semibold text-xl sm:text-2xl text-white">
                {data.position}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <div>
            <p className="font-medium text-main dark:text-main/90">
              Contact us
            </p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
              Chat to our friendly team
            </h1>

            <p className="mt-3 text-gray-500 dark:text-gray-400">
              We’d love to hear from you. Please fill out this form or shoot us
              an email.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <span className="inline-block p-3 text-main rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Email
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Our friendly team is here to help.
                </p>
                <p className="mt-2 text-sm text-main dark:text-main/90">
                techtitans@techtitans.id
                </p>
              </div>

              <div>
                <span className="inline-block p-3 text-main rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Live chat
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Our friendly team is here to help.
                </p>
                <p className="mt-2 text-sm text-main dark:text-main/90">
                  Start new chat
                </p>
              </div>

              <div>
                <span className="inline-block p-3 text-main rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Office
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Come say hello at our office HQ.
                </p>
                <p className="mt-2 text-sm text-main dark:text-main/90">
                  100 Smith Street Collingwood VIC 3066 AU
                </p>
              </div>

              <div>
                <span className="inline-block p-3 text-main rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Phone
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Mon-Fri from 8am to 5pm.
                </p>
                <p className="mt-2 text-sm text-main dark:text-main/90">
                  +62 812 8842 9122
                </p>
              </div>
            </div>

            <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
              <form>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John "
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <Link href={"mailto:techtitans@techtitans.id"} className="inline-block text-center w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-main rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Send message
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutPage;
