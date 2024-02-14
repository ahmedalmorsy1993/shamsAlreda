import { useState } from 'react'
import { FormWrapper } from '../Fields/FormWrapper'
import Input from '../Fields/Input'
import { contactSchema } from './contact.validation'
import Button from '../Button'
import { useTranslation } from 'react-i18next'
import TextArea from '../Fields/TextArea'
import Image from '../Core/Image'
import { $http } from '@/api';
import { observer } from '@/utils/observer'

export default function ContactForm() {
  const [loading, setLoading] = useState<boolean>(false)
  const { t } = useTranslation()
  const defaultValues = {
    name: '',
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    message: ""
  }
  const onSubmit = async (formData: typeof defaultValues) => {
    const { first_name, last_name } = formData
    formData.name = `${first_name} ${last_name}`
    setLoading(true)
    await $http.post({ url: 'contact_us', data: formData })
    observer.fire('reset')
    setLoading(false)

  }

  return (
    <div className='w-full'>
      <FormWrapper

        schema={contactSchema}
        onSubmit={onSubmit}
        defaultValues={defaultValues} >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
          <Input label='first_name' name="first_name" placeholder='first_name' />
          <Input label='last_name' placeholder='last_name' name="last_name" />
          <Input label='email' placeholder='email' name="email" type='email' />
          <Input label='phone' placeholder='phone' name="phone" type='number' />
        </div>
        <TextArea label='message' name="message" placeholder='message' className='mt-4' />
        <div className='flex items-center '>
          <Button loading={loading} className="mt-10" type="submit">
            {t('button.send')}
          </Button>
          <Image src='/icons/send.svg' />
        </div>
      </FormWrapper>
    </div>
  )
}
