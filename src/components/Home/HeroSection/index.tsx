import Image from '@/components/Core/Image'

import { useTranslation } from "react-i18next"

function HeroSection() {
  const { t } = useTranslation()
  return (
    <div className='min-h-[85svh] isolate relative   flex items-center justify-center after:absolute after:inset-0 after:bg-black after:w-full after:opacity-60 after:h-full' data-scroll='home' >
      <div className="w-full md:w-10/12 lg:w-6/12 mx-auto relative z-10">
        <Image src='/icons/curve.svg' alt='photo' className='absolute left-0 top-0 transition-all duration-200 animate-pulse' />
        <Image src='/icons/curve.svg' alt='photo' className='rotate-180 absolute right-0 bottom-0 transition-all duration-200 animate-pulse' />
        <h1 className="text-center text-[28px] p-2 lg:text-[48px] text-white" dangerouslySetInnerHTML={{ __html: t('heading.hero_title') }}>
        </h1>
      </div>
      <Image className='object-cover w-full h-full absolute inset-0 z-[-1] ' src='/images/hero.svg' alt='hero section photo' />
    </div>
  )
}

export default HeroSection