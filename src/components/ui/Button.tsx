import cn from "../../utils/cn";

import { forwardRef } from "react";

export type IButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(
          `
          w-fit rounded-md bg-gradient-to-r from-blue to-viollette 
          flex justify-center items-center gap-x-2 text-sm 465:text-base 1051:text-lg 
          font-semibold text-white transition-all duration-500 delay-75 py-3 px-4 
          465:py-4 465:px-8 hover:scale-105
        `,
          disabled && "opacity-75 cursor-not-allowed",
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
