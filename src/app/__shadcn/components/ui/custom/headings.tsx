import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "s/lib/utils";

const headingVariants = cva("", {
  variants: {
    variant: {
      default: "text-black",
      danger: "bg-red-500 bg-red-900/90 text-gray-950",
      heading: "text-slate-100",
    },
    textSize: {
      default: "text-base",
      lg: "text-lg",
      xl2: "text-2xl",
      xl3: "text-3xl",
      xl4: "text-4xl",
      xl5: "text-5xl",
      xl6: "text-6xl",
      xl7: "text-7xl",
    },
    textColor: {
      default: "text-black",
      hint: "text-teal-400",
      silver: "text-slate-100",
      silverDark: "text-slate-300",
      slateLight: "text-slate-200",
      light: "text-slate-50",
      dangerModerate: "text-orange-500",
      seriousDanger: "text-red-700",
      critical: "text-red-750",
    },
    margin: {
      default: "my-2",
      standard: "my-2.5",
      normal: "my-3.5",
      large: "my-7",
    },
  },
  defaultVariants: {
    variant: "default",
    textSize: "default",
    margin: "default",
    textColor: "default",
  },
});

export interface HeadingProps
  extends React.HTMLProps<HTMLDivElement>,
    VariantProps<typeof headingVariants> {
  children: React.ReactNode;
}

const Heading = function Heading({
  className,
  variant,
  children,
  textSize,
  textColor,
  margin,
}: HeadingProps) {
  return (
    <div
      className={cn(headingVariants({ variant, className, textSize, textColor, margin }))}
    >
      {children}
    </div>
  );
};

export { Heading, headingVariants };
