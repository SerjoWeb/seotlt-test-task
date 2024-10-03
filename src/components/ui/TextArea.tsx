import React from "react";
import cn from "../../utils/cn";

export interface ITextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, ITextareaProps>(
  ({ className, disabled, label, ...props }, ref) => {
    return (
      <div>
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

        <textarea
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

TextArea.displayName = "TextArea";

export default TextArea;
