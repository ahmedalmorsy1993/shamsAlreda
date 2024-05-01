import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import Notification from "./components/Notification";

export default function App({ children }: PropsWithChildren) {
  const { i18n } = useTranslation()
  document.documentElement.lang = i18n.language
  document.documentElement.dir = i18n.dir(i18n.language)
  return (
    <div>
      <Notification />
      {children}
    </div>
  )
}
