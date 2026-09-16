import NextLink from "next/link";
import type { ComponentProps } from "react";

type SiteLinkProps = ComponentProps<typeof NextLink>;

export function SiteLink({ target, rel, ...props }: SiteLinkProps) {
  const safeRel = target === "_blank" ? rel ?? "noopener noreferrer" : rel;

  return <NextLink {...props} target={target} rel={safeRel} />;
}
