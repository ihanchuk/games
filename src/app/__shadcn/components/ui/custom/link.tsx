import Link from "next/link";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "s/lib/utils";

const linkVariants = cva("", {
  variants: {
    variant: {
      default: "text-black underline text-sm hover:no-underline",
      inverted: "text-xs text-slate-200 underline text-sm hover:no-underline",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface LinkProps extends VariantProps<typeof linkVariants> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const AppLink = function Heading({ variant, children, href, className }: LinkProps) {
  return (
    <Link className={cn(linkVariants({ variant, className }))} href={href}>
      {children}
    </Link>
  );
};

export { AppLink, linkVariants };
