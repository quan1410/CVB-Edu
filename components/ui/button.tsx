import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#DD0000] text-white hover:bg-[#b80000]",
        secondary: "bg-[#FFCE00] text-black hover:bg-[#f0be00]",
        outline: "border border-black/15 bg-white text-black hover:bg-neutral-50",
        ghost: "text-neutral-800 hover:bg-neutral-100",
        dark: "bg-[#0B0B0B] text-white hover:bg-neutral-800",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-3",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
