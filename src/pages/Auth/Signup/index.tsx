import { FormWrapper } from '@/components/Fields/FormWrapper'
import Input from '@/components/Fields/Input'
import { schema } from './signup.validation'
import Button from '@/components/Button'
import { cn } from '@/utils/cn'
import { useLogin } from './useSignup'
import { Link } from 'react-router-dom'

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
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <Input label='first_name' placeholder='first_name' name="first_name" />
                <Input label='last_name' placeholder='last_name' name="last_name" />
              </div>
              <Input label='email' placeholder='email' name="email" type='email' />
              <Input type={inputType} label='password' name="password" placeholder='password'
                appendIcon={() => <i className={cn(passwordIcon, 'text-[20px] cursor-pointer')} onClick={() => setShowPassword(!showPassword)}></i>} />
            </div>
            <div className='flex items-center justify-center '>
              <Button loading={loading} className="mt-10 w-full" type="submit">
                {t('button.signup')}
              </Button>
            </div>
          </FormWrapper>
        </div>
        <div className='text-center mt-5'>
          <Link to="/login" className='text-primary'>
            {t('button.login')}
          </Link>
        </div>
      </div>
    </div>
  )
}
