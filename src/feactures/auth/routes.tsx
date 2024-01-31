import { Navigate} from 'react-router-dom'
import { RouteObject } from '../../feactures/common/types/router'
import { lazyLoadComponentObject } from '../../feactures/common/utils/lazyImport'
import React from 'react'

const { LoginPage } = lazyLoadComponentObject(() => import('../../feactures/auth/pages/LoginPage'), 'LoginPage')

export const authRoutes: RouteObject[] = [
{
    path: '/login',
    element: <LoginPage />
},

{
    path: '*',
    element: <Navigate replace to='/login' />
},

//Redirect to home from login and root an authenticated user
{
    path: '/login',
    element: <Navigate replace to='/home' />,
    roles: '*'
},

{
    path:'/',
    element: <Navigate replace to='/home' />,
    roles: '*'
}

]

export default authRoutes
