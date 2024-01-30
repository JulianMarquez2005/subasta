import { LoginSchema, type LoginValues } from './types'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../../../common/components/ui/Button/Button'
import { InputField } from '../InputLogin/InputField'
import React from "react";
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
                    className=' text-sm bg-white text-white hover:border-white hover:text-white'
                />
                <InputField
                    {...register('password')}
                    type='password'
                    error={errors.password?.message}
                    className=' text-sm bg-white text-white hover:border-white hover:text-white'
                    label='Contraseña'
                />
            </div>
            <div className='mt-10 justify-center flex'>
                <Button className='w-72 bg-white' type='submit' loading={isLoading}>
                    <span className='text-[#376575] text-sm'>Ingresar</span>
                </Button>
            </div>

            <div className='mt-16'>
                <span className='text-white text-xs'></span>
                © 2024 Copyright FINANZAUTO - Todos los derechos reservados


            </div>

        </form>
    )
}
