import { colorsClasses, roundedClasses } from '../../../../../feactures/common/commonClases'
import {
  ButtonSizes,
  ButtonSizesDefinition,
  ButtonVariants,
  Colors,
  Rounded,
  SpinnerSizes
} from '../../../../../feactures/common/types/styles'


const buttonSizeClasses: ButtonSizesDefinition = {
  xs: 'p-1 text-xs',
  sm: 'p-2 text-sm',
  md: 'px-3 py-3 text-md',
  lg: 'px-4 py-3 text-lg',
  xl: 'px-5 py-4 text-xl'
}

interface ButtonClassesParams {
  variant: ButtonVariants
  color: Colors
  size: ButtonSizes
  rounded: Rounded
}
export const getButtonClasses = ({
  color,
  rounded,
  size,
  variant
}: ButtonClassesParams): string => {
  let classes = `w-full inline-flex justify-center items-center gap-2 disabled:opacity-80 ${roundedClasses[rounded]} ${buttonSizeClasses[size]} `
  const colorClasses = colorsClasses[color]

  switch (variant) {
    case 'filled':
      classes += `${colorClasses.bg} ${colorClasses.textContrast} border-2 border-transparent`
      break
    case 'outlined':
      classes += `${colorClasses.text} border ${colorClasses.border}`
      break
    case 'text':
      classes += `${colorClasses.text}`
      break
  }

  return classes
}

const spinnerSizeClasses: Record<ButtonSizes, SpinnerSizes> = {
  xs: 'xs',
  sm: 'sm',
  md: 'sm',
  lg: 'md',
  xl: 'md'
}
export const getSpinnerSizeFromButtonSize = ({
  size
}: Pick<ButtonClassesParams, 'size'>): SpinnerSizes => {
  return spinnerSizeClasses[size]
}
