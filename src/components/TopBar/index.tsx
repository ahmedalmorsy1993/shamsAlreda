import { Each } from "../Core/Each"
import Image from "../Core/Image"
import { useTopBar } from "./useTopBar"


export default function TopBar() {
  const { contacts, socials } = useTopBar()
  return (
    <div className="min-h-[60px] bg-secondary flex items-center py-3 sticky top-0">
      <div className="container">
        <div className="flex items-center flex-col gap-3 justify-center md:flex-row md:justify-between">
          <ul className="flex items-center gap-3">
            <Each of={contacts} render={(item) => (
              <li>
                <a href={item.href + item.name} className="flex items-center gap-1 text-white">
                  <span>{item.name}</span>
                  <Image src={`/icons/${item.icon}`} alt="icon" />
                </a>
              </li>
            )} />
          </ul>
          <ul className="flex items-center gap-3">
            <Each of={socials} render={(item) => (
              <li className="flex items-center gap-2 text-white">
                <a href="">
                  <Image src={`/icons/${item.icon}`} alt="icon" />
                </a>
              </li>
            )} />
          </ul>

        </div>
      </div>
    </div>
  )
}
