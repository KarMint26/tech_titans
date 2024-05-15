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
    <div className="flex gap-3 item-center text-slate-700">
      <div className="text-3xl flex items-center justify-center">{icon}</div>
      <div className="">
        <p className="text-lg font-semibold"> {name}</p>
        <p className="text-small">{count} Projects</p>
      </div>
    </div>
  );
}

export default ItemBoxService;
