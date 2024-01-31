import clsx from 'clsx'
import { type ForwardedRef, forwardRef, useId } from 'react'
import React from 'react'
import {FieldWrapper, FieldWrapperPassThroughProps, inputClasses} from '../../../../feactures/auth/components/InputLogin'
export interface InputFieldProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    FieldWrapperPassThroughProps {
  wrapperClassName?: string
}

export const InputField = forwardRef(
  (
    {
      description,
      error,
      label,
      labelProps,
      className,
      wrapperClassName,
      ...restOfProps
    }: InputFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const innerId = useId()
    const id = restOfProps.id ?? innerId
    const descriptionId = `${id}-description`
    const errorId = `${id}-error`

    return (
      <FieldWrapper
        className={wrapperClassName}
        description={description}
        descriptionId={descriptionId}
        error={error}
        errorId={errorId}
        label={label}
        labelProps={labelProps}
      >
        <input
          aria-describedby={`${descriptionId} ${errorId}`}
          className={clsx(inputClasses, className, 'input-contain')}
          ref={ref}
          {...restOfProps}
          placeholder='input'
          
        />
      </FieldWrapper>
    )
  }
)

InputField.displayName = 'InputField'
