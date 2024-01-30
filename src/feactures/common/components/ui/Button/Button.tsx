import { colorsClasses } from '@/feactures/common/commonClasses'
import {
  getButtonClasses,
  getSpinnerSizeFromButtonSize
} from '@/feactures/common/components/ui/Button/classes'
import { Spinner } from '@/feactures/common/components/ui/Spinner'
import { ButtonSizes, ButtonVariants, Colors, Rounded } from '@/feactures/common/types/styles'

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: ButtonVariants
  color?: Colors
  secondColor?: Colors
  size?: ButtonSizes
  rounded?: Rounded
  loading?: boolean
  loadingPosition?: 'right' | 'left'
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  color = 'primary',
  secondColor = 'secondary',
  variant = 'filled',
  size = 'md',
  rounded = 'xl',
  children,
  className,
  disabled,
  loading,
  loadingPosition = 'left',
  leftIcon,
  rightIcon,
  ...restOfProps
}) => {
  const classes = getButtonClasses({ color, variant, size, rounded })
  const hover = colorsClasses[color]
  const spinnerSize = loading ? getSpinnerSizeFromButtonSize({ size }) : undefined

  return (
    <button
      className={`${classes} ${className} ${!disabled && hover.hover} `}
      disabled={loading || disabled}
      type={type}
      {...restOfProps}
    >
      {loading && loadingPosition === 'left' ? <Spinner size={spinnerSize} /> : null}
      {!loading ? leftIcon : null}
      {children}
      {loading && loadingPosition === 'right' ? <Spinner size={spinnerSize} /> : null}
      {!loading ? rightIcon : null}
    </button>
  )
}
