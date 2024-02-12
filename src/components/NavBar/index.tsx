

import useNavBar from "./useNavBar";
import Image from "../Core/Image";
import { Each } from "../Core/Each";
import { cn } from "@/utils/cn";

export default function NavBar() {
  const { links } = useNavBar()
  return (
    <nav className=" bg-white shadow-sm sticky top-0 z-10">
      <div className="container min-h-[80px] flex items-center justify-between ">
        <Image src="/logo.svg" alt="logo" />
        <ul className="flex gap-10">
          <Each of={links} render={(item) => (
            <li className={cn('transition-all duration-500 cursor-pointer', item.active ? 'text-red-700' : 'text-third')} >
              <a onClick={item.onScroll}>
                {item.text}
              </a>
            </li>
          )} />
          <li>
            {/* {links.map((link, index) => (
              <NavLink key={index} to={link.to}
                className={({ isActive }) => [
                  isActive ? "text-red-600 " : "text-third",
                  'px-3 transition-all duration-500'
                ].join(" ")}>{link.text}</NavLink>
            ))} */}
          </li>
        </ul>
        <div>
          dropdown
        </div>

      </div>
    </nav>
  )
}
