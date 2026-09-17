import NextLink from "next/link";
import type { ComponentProps } from "react";

type SiteLinkProps = Omit<ComponentProps<typeof NextLink>, "target" | "rel">;

export function SiteLink(props: SiteLinkProps) {
  return <NextLink {...props} />;
}
