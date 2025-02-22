"use client";

import { IoIosMore } from "react-icons/io";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 100,
    absent: 10,
  },
  {
    name: "Tue",
    present: 32,
    absent: 78,
  },
  {
    name: "Wed",
    present: 80,
    absent: 30,
  },
  {
    name: "Thur",
    present: 27,
    absent: 83,
  },
  {
    name: "Fri",
    present: 89,
    absent: 21,
  },
];

export default function AttendanceChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Attendance</h2>
        <IoIosMore className="cursor-pointer text-black hover:ring-1 hover:ring-black text-2xl" />
      </div>
      {/* CHARTS */}
      <div className="h-full">
        <ResponsiveContainer width="100%" height="90%">
          <BarChart width={500} height={300} data={data} barSize={20}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="present"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="absent"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
