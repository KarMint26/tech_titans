import Link from "next/link";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const WABtn = () => {
  return (
    <React.Fragment>
      <Link
        target="_blank"
        href={`https://wa.me/6285524632537?text=${encodeURIComponent(
          "Hello, I Want to Order Tech Titans Service"
        )}`}
        className="inline-block fixed bottom-20 sm:bottom-20 right-5 z-20 p-2 md:p-3 bg-white shadow rounded-full border-2 border-main"
      >
        <IoLogoWhatsapp className="text-[1.5rem] sm:text-2xl bg-transparent text-emerald-600" />
      </Link>
    </React.Fragment>
  );
};

export default WABtn;
