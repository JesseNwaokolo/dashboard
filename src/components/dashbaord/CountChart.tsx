"use client";

import { IoIosMore } from "react-icons/io";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Girls",
    uv: 50,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    uv: 50,
    fill: "#C3EBFA",
  },
  {
    name: "Total",
    uv: 100,
    fill: "white",
  },
];

export default function CountChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <IoIosMore className="cursor-pointer text-black hover:ring-1 hover:ring-black text-2xl" />
      </div>
      {/* CHARTS */}
      <div className="w-full h-[75%] relative">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="50%"
            outerRadius="100%"
            barSize={35}
            data={data}
          >
            <RadialBar background dataKey="uv" />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex ">
          <FaMale className=" text-jaySky text-2xl" />
          <FaFemale className=" text-jayYellow text-2xl" />
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="size-5 rounded-full bg-jaySky "></div>
          <p className="font-bold">1234</p>
          <p className="text-xs text-gray-300">Boys (55%)</p>
        </div>

        <div className="flex flex-col gap-1">
          <div className="size-5 rounded-full bg-jayYellow "></div>
          <p className="font-bold">1234</p>
          <p className="text-xs text-gray-300">Girls (45%)</p>
        </div>
      </div>
    </div>
  );
}
