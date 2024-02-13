import { useSettingsStore } from "@/store/settings"
import { ISocialContact } from "./types"

export const useTopBar = () => {
  const { settings } = useSettingsStore()
  const contacts: ISocialContact[] = [
    { name: settings['phone'], icon: 'phone.svg', href: `tel:${settings['phone']}` },
    { name: settings['contact_email'], icon: 'email.svg', href: `mailto:${settings['contact_email']}` },
  ]
  const socials: ISocialContact[] = [
    // { name: 'google', icon: 'google.svg', href: '' },
    { name: 'twitter', icon: 'twitter.svg', href: settings['twitter_link'] },
    { name: 'facebook', icon: 'facebook.svg', href: settings['facebook_link'] },
    { name: 'instagram', icon: 'instagram.svg', href: settings['instagram_link'] },
  ]


  return { contacts, socials }
}