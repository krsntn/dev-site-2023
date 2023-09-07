"use client";

import { SideNavProvider } from "./sideNavProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <SideNavProvider>{children}</SideNavProvider>;
}
