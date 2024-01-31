import { useNavigate } from 'react-router-dom'
import React from 'react'
import { LoginForm } from '../components/LoginForm/LoginForm'

import { useAuth } from '../store/AuthContext'

import { Alert } from '../../../feactures/common/components/ui/Alert/Alert'
import { AuthValues } from '../../../feactures/common/types/users'


export const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const { isLoggingIn, login, error } = useAuth()

  const handleSuccess = (values: AuthValues): void => {
    login(values, () => navigate('/home'))
  }
  return (
    <div
      className='flex flex-col gap-y-8 h-screen w-full items-start md:px-40 px-28   justify-center bg-cover bg-no-repeat  '
      
    >
      <div className='bg-opacity-9 rounded-md px-16 py-10 border border-[#376575] bg-[#376575] shadow-md  backdrop-blur-xl max-sm:px-8'>
        <div className='text-center flex  justify-center'>
          {' '}
          
        </div>

        <div className='text-white'>
          <h1 className='text-center  font-bold text-4xl pt-10'>BIENVENIDO</h1>
          <div className='mb-8 flex flex-col items-center text-gray-300'>
            <p className='text-sm'>Ingrese con sus credenciales de acceso</p>
          </div>
          {error && (
            <div className='my-5'>
              <Alert showIcon variant='danger'>
                {error}
              </Alert>
            </div>
          )}
          <LoginForm isLoading={isLoggingIn} onSuccess={handleSuccess} />
        </div>
      </div>
    </div>
  )
}
