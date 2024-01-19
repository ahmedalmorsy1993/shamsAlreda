
import { NavLink, Link } from "react-router-dom";
import useNavBar from "./useNavBar";

export default function NavBar() {
  const { links } = useNavBar()
  return (
    <nav className=" bg-slate-700">
      <div className="container h-[67px] flex items-center justify-between  ">
        <ul>
          <li>
            {links.map((link, index) => (
              <NavLink key={index} to={link.to}

                className={({ isActive }) => [
                  isActive ? "text-red-600 " : "text-white",
                  'px-3 transition-all duration-500'
                ].join(" ")}>{link.text}</NavLink>
            ))}
          </li>
        </ul>
        <div>

        </div>

      </div>
    </nav>
  )
}
