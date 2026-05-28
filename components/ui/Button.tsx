import { type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
};

export function Button({ className, variant = 'primary', size = 'md', ...props }: ButtonProps) {
    return (<button className={cn('inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50', {
            'bg-[#0BD3D3] text-black hover:bg-[#0BD3D3]/90': variant === 'primary',
            'bg-transparent border border-[#0BD3D3] text-[#0BD3D3] hover:bg-[#0BD3D3] hover:text-black': variant === 'outline',
            'h-9 px-4 py-2 text-sm': size === 'sm',
            'h-10 px-6 py-2': size === 'md',
            'h-11 px-8 py-3 text-lg': size === 'lg',
        }, className)} {...props}/>);
}
