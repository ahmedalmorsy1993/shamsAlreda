import { ISocialContact } from "./types"

export const useTopBar = () => {
  const contacts: ISocialContact[] = [
    { name: '920006158', icon: 'phone.svg', href: 'tel:' },
    { name: 'info@shams.alreda', icon: 'email.svg', href: 'mailto:' },
  ]
  const socials: ISocialContact[] = [
    { name: 'google', icon: 'google.svg', href: '' },
    { name: 'twitter', icon: 'twitter.svg', href: '' },
    { name: 'facebook', icon: 'facebook.svg', href: '' },
    { name: 'instagram', icon: 'instagram.svg', href: '' },
  ]


  return { contacts, socials }
}