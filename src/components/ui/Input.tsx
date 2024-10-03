import React from "react";
import cn from "../../utils/cn";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ className, type, disabled, label, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-y-1">
        {props.id && label ? (
          <label
            htmlFor={props.id}
            className="text-xs 623:text-sm text-gray-950 capitalize"
          >
            {label || ""}
            {props.required ? (
              <sup className="text-xs 623:text-sm text-pinky"> *</sup>
            ) : null}
          </label>
        ) : null}

        <input
          type={type}
          className={cn(
            `
          flex w-full rounded-md bg-black/5 backdrop-blur-sm border border-transparent 
          px-4 py-3 text-xs 623:text-sm placeholder:text-gray-800 disabled:cursor-not-allowed 
          disabled:opacity-75 focus:outline-none text-gray-950
        `,
            disabled && "opacity-75",
            className
          )}
          disabled={disabled}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
