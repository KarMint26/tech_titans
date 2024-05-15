import React from "react";
import ItemBoxService from "./ItemBoxService";
import { FaRegListAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { SlScreenSmartphone } from "react-icons/sl";
import { GiPencilBrush } from "react-icons/gi";

function CardCountProjcets({ customClass }: { customClass?: string }) {
  return (
    <div
      className={`w-full bg-white flex border border-slate-300 justify-between items-center px-6 py-4 rounded-xl shadow flex-wrap mt-5 gap-5 ${customClass} `}
    >
      <ItemBoxService name="UI/UX Design" count={25} icon={<GiPencilBrush />} />

      <ItemBoxService name="Mobile" count={15} icon={<SlScreenSmartphone />} />

      <ItemBoxService name="Website" count={35} icon={<TbWorld />} />

      <ItemBoxService name="Total Project" count={75} icon={<FaRegListAlt />} />
    </div>
  );
}

export default CardCountProjcets;
