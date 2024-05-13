"use client";
import Image from "next/image";
import React, { useEffect } from "react";

interface ITestimonial {
  id: number;
  name: string;
  image: string;
  description: string;
  title: string;
}

function HomeTestimonialsSection() {
  const testimonies: ITestimonial[] = [
    {
      id: 1,
      name: "Sundai Pichai",
      image: "/assets/home/testimonial/sundai.jpg",
      description:
        "“Tech Titans has been a trusted partner of Google in the past few years. They always deliver innovative and creative solutions that help us achieve our business goals. Their team is skilled and dedicated, and they always strive to exceed our expectations. I highly recommend Tech Titans to everyone who is looking for high quality IT solutions.”",
      title: "Chief of Execute - Google",
    },
    {
      id: 2,
      name: "Satya Nadella",
      image: "/assets/home/testimonial/satya.jpg",
      description:
        "“Tech Titans is one of the best IT consulting companies I've come across. They have a deep understanding of technology and business, and they are able to translate that understanding into practical and effective solutions. I really enjoyed working with Tech Titans and I hope to continue working with them in the future.”",
      title: "Chief of Execute - Google",
    },
    {
      id: 3,
      name: "William Tanuwijaya",
      image: "/assets/home/testimonial/william.png",
      description:
        "“Tech Titans is a strategic partner of Tokopedia. They have helped us build and improve our e-commerce platform to become the most popular platform in Indonesia. Their team really understands the needs of the e-commerce industry, and they always provide the right solutions to help us grow. I highly recommend Tech Titans to all e-commerce companies who want to boost their business.”",
      title: "Chief of Execute - Google",
    },
  ];
  const [testimony, setTestimony] = React.useState<ITestimonial>(
    testimonies[0]
  );
  const handlePrev = () => {
    const newIndex =
      (testimony.id - 2 + testimonies.length) % testimonies.length;
    setTestimony(testimonies[newIndex]);
  };

  const handleNext = () => {
    const newIndex = (testimony.id + 1) % testimonies.length;
    setTestimony(testimonies[newIndex]);
  };

  useEffect(() => {
    console.log(testimony);
  }, [testimony]);

  return (
    <div className="w-full px-8 sm:px-15 lg:px-20 py-12 sm:py-16 bg-white">
      <h2 className="text-2xl md:text-3xl text-center lg:text-4xl font-semibold">
        Testimonials
      </h2>
      <p className="text-center mt-3">What Our Clients Saying</p>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-6xl px-6 py-10 mx-auto">
          <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>

            <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
              <Image
                className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                src={testimony.image}
                width={100}
                height={100}
                alt="client photo"
              />

              <div className="mt-2 md:mx-6">
                <div>
                  <p className="text-xl font-medium tracking-tight text-white">
                    {testimony.name}
                  </p>
                  <p className="text-blue-200 ">{testimony.title}</p>
                </div>

                <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                  {testimony.description}
                </p>

                <div className="flex items-center justify-between mt-6 md:justify-start">
                  <button
                    title="left arrow"
                    onClick={handlePrev}
                    className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    title="right arrow"
                    onClick={handleNext}
                    className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}

export default HomeTestimonialsSection;
