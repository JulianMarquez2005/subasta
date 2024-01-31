import { type RouteObject as ReactObjectReactRouter } from 'react-router-dom'
import { RoleValues } from './user'

export type RouteObject = ReactObjectReactRouter & {
  roles?:RoleValues[] | '*'
}