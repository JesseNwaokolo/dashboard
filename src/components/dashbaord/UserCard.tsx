import { IoIosMore } from "react-icons/io";
export default function UserCard({ type }: { type: string }) {
  return (
    <div className="rounded-2xl odd:bg-jayPurple even:bg-jayYellow p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] px-2 py-1 rounded-full text-green-600 bg-white">
          2024/25
        </span>
        <IoIosMore className="cursor-pointer text-white hover:ring-1 hover:ring-black text-2xl" />
      </div>
      <p className="text-2xl font-semibold my-3">6000</p>
      <p className="capitalize text-sm font-medium text-gray-500">{type}</p>
    </div>
  );
}
