import { lazy } from 'react'

export function lazyLoadComponentObject<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends React.ComponentType<any>,
  // eslint-disable-next-line no-use-before-define, no-unused-vars
  I extends { [K2 in K]: T },
  K extends keyof I
>(factory: () => Promise<I>, name: K): I {
  return Object.create({
    [name]: lazy(() => factory().then((module) => ({ default: module[name] })))
  })
}

export function lazyLoadComponent<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends React.ComponentType<any>,
  // eslint-disable-next-line no-use-before-define, no-unused-vars
  I extends { [K2 in K]: T },
  K extends keyof I
>(factory: () => Promise<I>, name: K): React.LazyExoticComponent<T> {
  return lazy(() => factory().then((module) => ({ default: module[name] })))
}

export function lazyImport<
  T extends React.ComponentType<any>,
  // eslint-disable-next-line no-use-before-define, no-unused-vars
  I extends { [K2 in K]: T },
  K extends keyof I
>(factory: () => Promise<I>, name: K): I {
  return Object.create({
    [name]: lazy(() => factory().then((module) => ({ default: module[name] })))
  })
}
