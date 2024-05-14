"use client";
import React from "react";

const dataFAQs = [
  {
    id: 1,
    title: "What makes your IT Solution company different from others?",
    description: `We stand out for providing innovative, high-quality technology solutions specifically designed to meet our customers' unique needs. We also provide superior customer service and are committed to building long-term relationships with each client.`,
  },
  {
    id: 2,
    title: "What types of services does your IT Solution company offer?",
    description: `We offer a range of services, including web development, mobile app development, UIUX design`,
  },
  {
    id: 3,
    title: "How do you ensure security of your data?",
    description: `We take security seriously. Our team has years of experience in the field, and we are committed to maintaining the highest standards of data security.`,
  },
  {
    id: 4,
    title: "How can I start working with your IT Solution company?",
    description: `You can contact us by email or Whatsapp to discuss your needs. Our team will respond immediately and prepare a proposal that suits your needs.`,
  },
  {
    id: 5,
    title: "How can I measure the success of a project with you?",
    description: `We will work with you to set clear, measurable goals before starting the project. In addition, we will provide regular reports on project progress and measure goal achievement on a regular basis.`,
  },
];
function HomeFAQSection() {
  const [activeIndex, setActiveIndex] = React.useState<number>(1);

  return (
    <section className="bg-main">
      <section className="bg-main py-10">
        <div className="container max-w-4xl px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center lg:text-3xl text-white">
            Frequently Asked Questions
          </h1>

          <div className="mt-12 space-y-8">
            {dataFAQs.map((item) => (
              <div
                key={item.id}
                className="border-2 bg-white border-gray-100 rounded-lg dark:border-gray-700"
              >
                <button
                  onClick={() => setActiveIndex(item.id)}
                  className="flex items-center justify-between w-full p-8"
                >
                  <h1 className="font-semibold text-gray-700">{item.title}</h1>

                  {activeIndex === item.id ? (
                    <span className="text-gray-400 bg-gray-200 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M18 12H6"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span className="text-white bg-blue-500 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </span>
                  )}
                </button>

                {activeIndex === item.id && (
                  <>
                    <hr className="border-gray-200" />

                    <p className="p-8 text-sm text-gray-500">
                      {item.description}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default HomeFAQSection;
