import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
  error?: string;
}

const Input = ({ label, id, description, error, ...props }: InputProps) => {
  const inputClasses =
    "block w-full px-2 py-1.5 pr-10 rounded-md border-0 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6 " +
    (error
      ? "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500"
      : "text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600");

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          id={id}
          aria-invalid={!!error}
          aria-describedby={
            error
              ? `${id}-error`
              : description
                ? `${id}-description`
                : undefined
          }
          className={inputClasses}
          {...props}
        />
        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {error ? (
        <p className="mt-2 text-sm text-red-600" id={`${id}-error`}>
          {error}
        </p>
      ) : (
        description && (
          <p className="mt-2 text-sm text-gray-500" id={`${id}-description`}>
            {description}
          </p>
        )
      )}
    </div>
  );
};

export default Input;
