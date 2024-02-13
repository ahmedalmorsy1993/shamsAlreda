import { useTranslation } from "react-i18next"
import ServiceCard from "./ServiceCard"

export default function OutServices() {
  const { t } = useTranslation()
  return (
    <div data-scroll='our_services' className="min-h-screen mt-12" >
      <div className="container">
        <h2 className="text-center text-[40px] text-third">
          {t('heading.our_service_title')}
        </h2>
        <div className="mt-10">
          <ServiceCard />
        </div>
      </div>
    </div>
  )
}
