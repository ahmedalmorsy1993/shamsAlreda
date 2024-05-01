import { FormWrapper } from '../../components/Fields/FormWrapper'
import Input from '../../components/Fields/Input'
import { schema } from './login.validation'
import Button from '../../components/Button'
import { cn } from '@/utils/cn'
import { useLogin } from './useLogin'

export default function Login() {
  const { inputType, loading, onSubmit, passwordIcon, setShowPassword, t, defaultValues, showPassword } = useLogin()
  return (
    <div className="container items-center flex min-h-screen">
      <div className='w-full lg:w-6/12 mx-auto shadow-card rounded-lg p-8'>
        <div className='w-full'>
          <FormWrapper
            schema={schema}
            onSubmit={onSubmit}
            defaultValues={defaultValues} >
            <div className='space-y-5'>
              <Input label='email' placeholder='email' name="email" type='email' />
              <Input type={inputType} label='password' name="password" placeholder='password'
                appendIcon={() => <i className={cn(passwordIcon, 'text-[20px] cursor-pointer')} onClick={() => setShowPassword(!showPassword)}></i>} />
            </div>
            <div className='flex items-center justify-center '>
              <Button loading={loading} className="mt-10" type="submit">
                {t('button.login')}
              </Button>
            </div>
          </FormWrapper>
        </div>
      </div>
    </div>
  )
}
