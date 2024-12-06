import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "s/lib/utils";

const paragraphVariants = cva("", {
  variants: {
    variant: {
      default: "text-base",
      xs: "text-xs",
      sm: "text-sm",
      lg: "text-lg",
    },
    padding: {
      default: "text-black",
    },
    margin: {
      default: "my-2",
      standard: "my-2.5",
      normal: "my-3.5",
    },
    textColor: {
      default: "text-gray-200",
      dark: "text-gray-400",
      light: "text-slate-100",
      danger: "text-red-600",
      critical: "text-red-900",
    },
  },
  defaultVariants: {
    variant: "default",
    margin: "default",
    padding: "default",
    textColor: "default",
  },
});

export interface HeadingProps
  extends React.HTMLProps<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
  children: React.ReactNode;
}

const P = function Heading({
  className,
  variant,
  children,
  padding,
  margin,
  textColor,
}: HeadingProps) {
  return (
    <div
      className={cn(
        paragraphVariants({
          className,
          variant,
          padding,
          margin,
          textColor,
        }),
      )}
    >
      {children}
    </div>
  );
};

export { P, paragraphVariants };
