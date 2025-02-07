import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between">
      {/* SEARCH BAR */}
      <div className="hidden md:flex">
        <Image src="/search.png" alt="search" width={15} height={15} />
        <input type="text" placeholder="Search" />
      </div>

      {/* ICONS */}
      <div className="flex items-center gap-x-6">
        <div className="size-7 grid place-items-center rounded-full bg-white cursor-pointer">
          <Image src="/message.png" alt="mesaage" width={15} height={15} />
        </div>
        <div className="size-7 grid place-items-center rounded-full bg-white cursor-pointer relative">
          <Image src="/announce.png" alt="announce" width={15} height={15} />
          <span className="absolute -top-3 -right-3 size-5 rounded-full bg-purple-600 text-white text-xs font-bold grid place-items-center">10</span>
        </div>
        <div className="flex flex-col">
          <p className="text-xs font-medium leading-3">John Doe</p>
          <span className="text-[10px] font-medium text-gray-500 text-right">
            Admin
          </span>
        </div>
        <Image src="/avatar.png" alt="avatar" width={36} height={36} />
      </div>
    </div>
  );
}
