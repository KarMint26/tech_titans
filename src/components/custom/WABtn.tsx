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
        className="inline-block fixed bottom-20 sm:bottom-20 right-5 z-10 p-3 bg-white rounded-full shadow shadow-main"
      >
        <IoLogoWhatsapp className="text-[2.5rem] sm:text-2xl bg-transparent text-emerald-600" />
      </Link>
    </React.Fragment>
  );
};

export default WABtn;
