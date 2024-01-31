// import { AuthSlice, AuthState } from '@/feactures/auth/store/authStore'
// import { session } from '@/feactures/common/const'
// import { AuthValues } from '@/feactures/common/types'
// import { useBoundStore } from '@/store'
// import { createContext, useContext, useEffect, useRef, useState } from 'react'
// import { useIdleTimer } from 'react-idle-timer'
// import { shallow } from 'zustand/shallow'
// import React from 'react'

// import {
//   login as loginWithApi,
//   refreshToken as refreshTokenWithAPi
// } from '@/feactures/auth/services'
// import { PageLoader } from '@/feactures/common/components/ui/PageLoader'

// type ActionCallback = () => void

// interface AuthContextValue {
//   login: (params: AuthValues, cd?: ActionCallback) => Promise<void>
//   logout: (cb?: ActionCallback) => void
//   isLoggingIn: boolean
//   user: AuthState
//   isCheckingSession: boolean
//   error: string
// }

// interface ProviderProps {
//   children: React.ReactNode
// }

// export const AuthContext = createContext({} as AuthContextValue)

// export const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
//   const value = useAuthProvider()

//   if (value.isCheckingSession) return <PageLoader />

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
// }

// const useAuthProvider = (): AuthContextValue => {
//   const authStore: AuthSlice = useBoundStore(
//     ({
//       isAuthenticated,
//       loggedInDate,
//       setLogin,
//       setLogout,
//       setRefresh,
//       firstName,
//       lastName,
//       refreshToken,
//       roleId,
//       roleName,
//       token,
//       userId
//     }) => ({
//       isAuthenticated,
//       loggedInDate,
//       setLogin,
//       setLogout,
//       setRefresh,
//       firstName,
//       lastName,
//       refreshToken,
//       roleId,
//       roleName,
//       token,
//       userId
//     }),
//     shallow
//   )

//   const [isCheckingSession, setIsCheckingSession] = useState(true)
//   const [isLoggingIn, setIsLoggingIn] = useState(false)
//   const [error, setError] = useState('')
//   const refreshTokenIntervalIdRef = useRef<ReturnType<typeof setInterval>>()
//   const mounted = useRef(false)

//   const unsubscribeToRefreshToken = (): void => {
//     clearInterval(refreshTokenIntervalIdRef.current)
//     refreshTokenIntervalIdRef.current = undefined
//   }

//   const subscribeToRefreshToken = (): void => {
//     unsubscribeToRefreshToken()

//     refreshTokenIntervalIdRef.current = setInterval(refreshToken, session.autoRefresh)
//   }

//   const login: AuthContextValue['login'] = async (values, callback) => {
//     setIsLoggingIn(true)
//     setError('')

//     try {
//       const data = await loginWithApi(values)
//       authStore.setLogin(data)

//       localStorage.setItem('userId', data.userId)

//       subscribeToRefreshToken()
//       callback?.()
//     } catch (error) {
//       console.error(error)
//       setError('Usuario o contraseña incorrecta')
//     } finally {
//       setIsLoggingIn(false)
//     }
//   }

//   const refreshToken = async (): Promise<void> => {
//     const { token, refreshToken } = useBoundStore.getState()

//     if (!token || !refreshToken) {
//       logout()
//       return
//     }

//     try {
//       const authUser = await refreshTokenWithAPi({
//         token,
//         refreshToken
//       })

//       authStore.setRefresh(authUser)
//     } catch (error) {
//       console.error(error)
//       logout()
//     }
//   }

//   const logout: AuthContextValue['logout'] = (callback) => {
//     authStore.setLogout()
//     unSuscribeRefreshToken()
//     callback?.()
//   }

//   const checkIdSessionIsAlive = async (): Promise<void> => {
//     if (!authStore.token || !authStore.refreshToken) {
//       setIsCheckingSession(false)
//       logout()
//       return
//     }
//     setIsCheckingSession(true)
//     setIsLoggingIn(true)
//     try {
//       const authUser = await refreshTokenWithAPi({
//         token: authStore.token,
//         refreshToken: authStore.refreshToken
//       })

//       authStore.setRefresh(authUser)
//       subscribeToRefreshToken()
//     } catch (error) {
//       console.error(error)
//       logout()
//     } finally {
//       setIsLoggingIn(false)
//       setIsCheckingSession(false)
//     }
//   }

//   const unSuscribeRefreshToken = () => {
//     clearInterval(refreshTokenIntervalIdRef.current)
//     refreshTokenIntervalIdRef.current = undefined
//   }

//   useIdleTimer({
//     onActive: () => checkIdSessionIsAlive(),
//     onIdle: () => unSuscribeRefreshToken(),
//     timeout: session.idleTime
//   })

//   useEffect(() => {
//     if (mounted.current) return

//     checkIdSessionIsAlive()
//     mounted.current = true
//     return () => unSuscribeRefreshToken()

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   return {
//     user: {
//       isAuthenticated: authStore.isAuthenticated,
//       token: authStore.token,
//       refreshToken: authStore.refreshToken,
//       roleName: authStore.roleName,
//       userId: authStore.userId,
//       loggedInDate: authStore.loggedInDate,
//       firstName: authStore.firstName,
//       lastName: authStore.lastName,
//       roleId: authStore.roleId
//     },
//     isCheckingSession,
//     isLoggingIn,
//     error,
//     login,
//     logout
//   }
// }

// export const useAuth = (): AuthContextValue => useContext(AuthContext)
// export const useAuthStore = (): Omit<AuthState, 'token' | 'refreshToken'> =>
//   useBoundStore(
//     ({ isAuthenticated, loggedInDate, firstName, lastName, roleId, roleName, userId }) => ({
//       isAuthenticated,
//       loggedInDate,
//       firstName,
//       lastName,
//       roleId,
//       roleName,
//       userId
//     }),
//     shallow
//   )
