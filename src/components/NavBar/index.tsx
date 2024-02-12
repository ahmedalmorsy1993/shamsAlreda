

import useNavBar from "./useNavBar";
import Image from "../Core/Image";
import { Each } from "../Core/Each";
import { cn } from "@/utils/cn";
import LangSwitcher from "../LangSwitcher";

export default function NavBar() {
  const { links } = useNavBar()
  return (
    <nav className=" bg-white shadow-sm sticky top-0 z-10">
      <div className="container min-h-[80px] flex items-center justify-between ">
        <Image src="/logo.svg" alt="logo" />
        <ul className="flex gap-10">
          <Each of={links} render={(item) => (
            <li className={cn('transition-all duration-300 cursor-pointer relative', item.active ?
              'text-primary after:h-[2px] after:w-[50%] after:transition-all after:duration-300 hover:after:w-[100%] after:ease-linear after:absolute after:bottom-[-5px] after:block after:bg-primary ' : 'text-third')} >
              <a onClick={item.onScroll}>
                {item.text}
              </a>
            </li>
          )} />
        </ul>
        <div>
          <LangSwitcher />
        </div>

      </div>
    </nav>
  )
}
