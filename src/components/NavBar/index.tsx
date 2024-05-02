

import useNavBar from "./useNavBar";
import Image from "../Core/Image";
import { Each } from "../Core/Each";
import { cn } from "@/utils/cn";
import LangSwitcher from "../LangSwitcher";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CartItem from "./CartIcon";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/store/auth";

export default function NavBar() {
  const { t } = useTranslation()
  const { token, logout } = useAuth()
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  const onToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }
  const location = useLocation()
  const navigate = useNavigate()
  const { links } = useNavBar()
  return (
    <nav className=" bg-white shadow-sm sticky top-0 z-10">
      <div className="container min-h-[80px] flex items-center justify-between relative">
        <Link to="/"><Image src="/logo.svg" alt="logo" className="md:flex hidden" /></Link>
        <ul className="md:flex hidden gap-10 ">
          <Each of={links} render={(item) => (
            <li className={cn('transition-all duration-300 cursor-pointer relative', item.active ?
              'text-primary after:h-[2px] after:w-[50%] after:transition-all after:duration-300 hover:after:w-[100%] after:ease-linear after:absolute after:bottom-[-5px] after:block after:bg-primary ' : 'text-third')} >
              <a onClick={() => {

                if (location.pathname !== '') {
                  navigate(item.href)
                  setTimeout(() => {
                    item.onScroll()
                  }, 500);
                }
                item.onScroll()
              }}>
                {item.text}
              </a>
            </li>
          )} />
        </ul>
        <Image onClick={onToggleMenu} width={70} height={70} src="/icons/burger_menu.svg" className="block md:hidden cursor-pointer" />
        <div className="flex items-center gap-10" >
          {!token ? <Link to='/login' className="text-primary bg-primary/30 rounded-md text-[15px] p-2 px-4">
            {t('button.login')}
          </Link> : <a onClick={logout} className="text-primary cursor-pointer bg-primary/30 rounded-md text-[15px] p-2 px-4">{t('button.logout')}</a>}
          <CartItem />
          <LangSwitcher />
        </div>
        <ul
          className={
            cn(`
            flex flex-col shadow-md justify-center items-center top-[80px] md:hidden
            absolute w-full bg-white left-0 right-0 p-4 h-fit  gap-10 transition-all duration-300`, toggleMenu ? 'scale-y-100 translate-y-0 ' : 'scale-y-0 translate-y-[-100px]')}>
          <Each of={links} render={(item) => (
            <li className={cn('transition-all duration-300 cursor-pointer relative', item.active ?
              'text-primary after:h-[2px] after:w-[50%] after:transition-all after:duration-300 hover:after:w-[100%] after:ease-linear after:absolute after:bottom-[-5px] after:block after:bg-primary ' : 'text-third')} >
              <a onClick={() => {

                if (location.pathname !== '') {
                  navigate(item.href)
                  setTimeout(() => {
                    item.onScroll()
                  }, 500);
                }
                item.onScroll();
                setToggleMenu(false)
              }}>
                {item.text}
              </a>
            </li>
          )} />
        </ul>
      </div>
    </nav>
  )
}
