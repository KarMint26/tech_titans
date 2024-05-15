import React, { ReactNode } from "react";

function ItemBoxService({
  name,
  count,
  icon,
}: {
  name: string;
  count: number;
  icon: ReactNode;
}) {
  return (
    <div className="flex gap-3 item-center dark:text-white text-slate-700">
      <div className="text-3xl flex items-center justify-center">{icon}</div>
      <div className="">
        <p className="text-base lg:text-lg font-semibold"> {name}</p>
        <p className="text-sm lg:text-base">{count} Projects</p>
      </div>
    </div>
  );
}

export default ItemBoxService;
