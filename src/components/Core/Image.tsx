import { ImgHTMLAttributes } from "react"

interface Props extends ImgHTMLAttributes<HTMLImageElement> { }

function Image(props: Props) {
  return <img {...props} loading="lazy" alt="photo" />
}

export default Image