import Menu from "@/components/dashbaord/Menu";
import Navbar from "@/components/dashbaord/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex max-w-[2000px] mx-auto">
      {/* LEFT */}
      <div className=" w-1/5 md:w-[8%] lg:w-1/5">
        <Link
          href="/"
          className="flex gap-x-2 items-center justify-center lg:justify-start py-4 lg:px-4"
        >
          <Image
            alt="logo"
            src="/school.jpg"
            width={32}
            height={32}
            className="border-2"
          />
          <span className="hidden lg:inline">Jay School</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className=" w-4/5 md:w-[92%] lg:w-4/5 p-4 bg-[#f7f8fa] overflow-auto">
      <Navbar />
      {children}
      </div>
    </div>
  );
}
