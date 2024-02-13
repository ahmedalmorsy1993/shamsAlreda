import Image from '@/components/Core/Image'

import { useTranslation } from "react-i18next"

function HeroSection() {
  const { t } = useTranslation()
  return (
    <div className='min-h-[85svh] isolate  bg-slate-700 flex items-center justify-center' data-scroll='home' >
      <div className="w-full md:w-10/12 lg:w-6/12 mx-auto relative z-10">
        <Image src='/icons/curve.svg' alt='photo' className='absolute left-0 top-0 transition-all duration-200 ' />
        <Image src='/icons/curve.svg' alt='photo' className='rotate-180 absolute right-0 bottom-0 transition-all duration-200 ' />
        <h1 className="text-center text-[28px] p-2 lg:text-[48px] text-white" dangerouslySetInnerHTML={{ __html: t('heading.hero_title') }}>
        </h1>
      </div>
      {/* <Image className='object-cover w-full h-full' src='/images/hero_section.svg' alt='hero section photo' /> */}
    </div>
  )
}

export default HeroSection