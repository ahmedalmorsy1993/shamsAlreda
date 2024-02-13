import Image from "@/components/Core/Image"
import { useSettingsStore } from "@/store/settings"

export default function AboutUsPage() {
  const { aboutPage } = useSettingsStore()
  return (
    <div data-scroll='about_us' className="min-h-screen bg-light-gray  " >
      <div className="h-[60svh] overflow-hidden rounded-[8px] ">
        <Image src={aboutPage.image} className="h-full w-full object-cover" />
      </div>
      <div className="container mt-5">
        <h1 className="text-primary text-[28px]">
          {aboutPage.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: aboutPage.description }} className="text-gray font-normal leading-[36px] text-[18px] mt-4">
        </div>

      </div>
    </div>
  )
}
