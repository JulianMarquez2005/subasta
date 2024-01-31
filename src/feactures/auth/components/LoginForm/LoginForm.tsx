import { LoginSchema, type LoginValues } from '../../../../feactures/auth/components/LoginForm/types'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../../../../feactures/common/components/ui/Button/Button'
import { InputField } from '../InputLogin'
import React from 'react'
export interface LoginFormProps {
  onSuccess: (values: LoginValues) => void
  isLoading?: boolean
}

export const LoginForm: React.FC<LoginFormProps> = ({ isLoading, onSuccess }) => {
  const { formState, handleSubmit, register } = useForm<LoginValues>({
    resolver: zodResolver(LoginSchema)
  })
  const { errors } = formState

  return (
    <form onSubmit={handleSubmit(onSuccess)} autoComplete='off'>
      <div className='space-y-8'>
        <InputField
          label='Usuario'
          error={errors.username?.message}
          {...register('username')}
          className=' text-sm bg-secondary-200 text-white hover:border-primary  hover:text-white'
        />
        <InputField
          // labelProps={{ className: 'font-semibold text-gray-300' }}
          {...register('password')}
          type='password'
          error={errors.password?.message}
          className=' text-sm bg-secondary-200 text-white  hover:border-primary   hover:text-white'
          label='Contraseña'
        />
      </div>
      <div className='mt-10 justify-center flex'>
        <Button className='w-72  bg-primary' type='submit' loading={isLoading}>
          <span className=' text-[#376575] text-sm'>Ingresar</span>
        </Button>
      </div>

      <div className='mt-16'>
        <span className='text-white text-xs'></span>
          © 2024 Copyright FINANZAUTO - Todos los derechos reservados
        
      </div>
    </form>
  )
}
