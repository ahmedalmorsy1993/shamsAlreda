
import { NavLink, Link } from "react-router-dom";
import useNavBar from "./useNavBar";

export default function NavBar() {
  const { links, cart } = useNavBar()
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
          <Link to="/cart" className="relative">
            <span className="flex ml-[-10px] items-center justify-center w-[25px] h-[25px] rounded-[50%] text-[14px]  text-white bg-red-800">
              {cart.length}
            </span>
            <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 576 512"> <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
          </Link>
        </div>

      </div>
    </nav>
  )
}
