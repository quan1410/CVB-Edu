import * as React from "react";

import { cn } from "@/lib/utils";

export const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        "h-11 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-950 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  ),
);
Select.displayName = "Select";
