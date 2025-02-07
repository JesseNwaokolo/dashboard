import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      { icon: "/home.png", label: "Home", href: "/" },
      { icon: "/teacher.png", label: "Teachers", href: "/teachers" },
      { icon: "/student.png", label: "Student", href: "/students" },
      { icon: "/parent.jpg", label: "Parent", href: "/parents" },
      { icon: "/classes.jpg", label: "Classes", href: "/classes" },
    ],
  },
  {
    title: "OTHERS",
    items: [
      {
        icon: "/profile.jpg",
        label: "Profile",
        href: "/profile",
      },
      {
        icon: "/settings.jpg",
        label: "Settings",
        href: "/settings",
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
      },
    ],
  },
];

export default function Menu() {
  return (
    <div className="px-4 text-gray-500">
      {menuItems.map((item) => {
        return (
          <div key={item.title}>
            <span className="hidden lg:block font-light text-gray-600">
              {item.title}
            </span>
            {item.items.map((i) => {
              return (
                <Link
                  key={i.label}
                  href={i.href}
                  className="flex gap-x-2 items-center justify-center lg:justify-start py-2"
                >
                  <Image alt={i.label} src={i.icon} width={20} height={20} />
                  <span className="hidden lg:inline">{i.label}</span>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
