// components/ui/button.tsx
import { ButtonHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'transparent';
  href?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', href, children, ...props }, ref) => {
    
    // If href is provided, render as Link
    if (href) {
      return (
        <Link
          href={href}
          className={cn(
            'px-8 py-4 uppercase font-bold text-sm tracking-wider transition-colors inline-block text-center',
            {
              'bg-orange-500 hover:bg-orange-400 text-white': variant === 'primary',
              'bg-black hover:bg-gray-800 text-white': variant === 'secondary',
              'bg-transparent border border-black hover:bg-black hover:text-white': variant === 'transparent',
            },
            className
          )}
        >
          {children}
        </Link>
      );
    }

    // Otherwise render as button
    return (
      <button
        className={cn(
          'px-8 py-4 uppercase font-bold text-sm tracking-wider transition-colors',
          {
            'bg-orange-500 hover:bg-orange-400 text-white': variant === 'primary',
            'bg-black hover:bg-gray-800 text-white': variant === 'secondary',
            'bg-transparent border border-black hover:bg-black hover:text-white': variant === 'transparent',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';