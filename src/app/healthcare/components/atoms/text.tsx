import { TextProps } from "../../lib/interface/atoms.interface"
import { twMerge } from 'tailwind-merge'

export const Text:React.FC<TextProps> = ({
    className,
    children,
    text,
        ...props
    }) => {
      return (
        <p className={twMerge(`font-cera font-light text-white`, className) } {...props}>
           {children ? children : text}
        </p>
      )
    }