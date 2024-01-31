import clsx from 'clsx'
import { forwardRef } from 'react'
import React from 'react'

export interface FieldWrapperProps {
  children: React.ReactNode
  className?: string
  label?: React.ReactNode
  labelProps?: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >
  errorId?: string
  error?: string
  descriptionId?: string
  description?: string
}

export type FieldWrapperPassThroughProps = Pick<
  FieldWrapperProps,
  'description' | 'error' | 'label' | 'labelProps'
>

export const FieldWrapper = forwardRef(
  (
    {
      children,
      label,
      labelProps = {},
      descriptionId,
      description,
      errorId,
      error,
      className
    }: FieldWrapperProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { className: labelClassName } = labelProps

    return (
      <div className={className} ref={ref}>
        {label ? (
          <label {...labelProps} className={clsx('relative flex ', labelClassName)}>
            {children}
            <span className='absolute top-2.5 left-2 transition duration-200 text-gray-400 input-text'>
              {label}
            </span>
          </label>
        ) : null}

        {!label ? children : null}

        {description ? (
          <span className={`block mt-1 text-sm text-gray-500`} id={descriptionId}>
            {description}
          </span>
        ) : null}

        {error ? (
          <span
            aria-live='assertive'
            className={`block text-sm text-red-500`}
            id={errorId}
            role='alert'
          >
            {error}
          </span>
        ) : null}
      </div>
    )
  }
)

FieldWrapper.displayName = 'FieldWrapper'
