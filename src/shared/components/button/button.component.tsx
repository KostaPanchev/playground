import type { ComponentPropsWithoutRef, ElementType } from 'react';

type Variant = 'primary' | 'secondary' | 'tertiary'

type ButtonProps<T extends ElementType> = {
  As?: T;
  variant?: Variant;
} & ComponentPropsWithoutRef<T>

const DEFAULT_TYPE = 'button';
function Button<T extends ElementType = typeof DEFAULT_TYPE>(props: ButtonProps<T>) {
  const { As, variant = 'primary', ...restProps } = props;
  const Component = As ?? DEFAULT_TYPE;

  console.log(typeof DEFAULT_TYPE)
  console.log('Button', { variant });

  return <Component {...restProps} />;
}

export default Button;