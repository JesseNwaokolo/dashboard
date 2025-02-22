import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-x-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="Search..." width={15} height={15} />
        <input type="text" placeholder="Search" className="outline-none w-[200px] py-2 bg-transparent" />
      </div>

      {/* ICONS */}
      <div className="flex items-center gap-x-6 justify-end w-full">
        <div className="size-7 grid place-items-center rounded-full bg-white cursor-pointer">
          <Image src="/message.png" alt="mesaage" width={15} height={15} />
        </div>
        <div className="size-7 grid place-items-center rounded-full bg-white cursor-pointer relative">
          <Image src="/announce.png" alt="announce" width={15} height={15} />
          <div className="absolute -top-3 -right-3 size-5 rounded-full bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center">86</div>
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
