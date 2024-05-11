"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavigationBar from "./NavigationBar";

const Wrapper = () => {
  const pathname = usePathname();
  const activeLink = pathname.split("/").pop();
  const [activeNav, setActiveNav] = useState<boolean>(false);

  return (
    <React.Fragment>
      <NavigationBar
        activeLink={activeLink}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />
    </React.Fragment>
  );
};

export default Wrapper;