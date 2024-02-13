import Image from "@/components/Core/Image";

export default function ServiceCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <Image src="/images/food.svg" className="object-fill h-full w-full" />
      <div className="px-4 flex flex-col items-start justify-start gap-10 ">
        <h3 className="text-primary text-[20px] font-bold ">
          صناعة المعجنات
        </h3>
        <h2 className="text-third text-[40px] leading-[59px] ">
          تقديم وصناعة افخر انواع المعجنات المختلفة والفريدة
        </h2>
        <p className="text-gray text-[18px] font-normal leading-[32px]">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى
        </p>
      </div>
    </div>
  )
}
