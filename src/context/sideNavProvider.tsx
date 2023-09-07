"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

type SideNavType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const SideNavContext = createContext<SideNavType>({
  isOpen: false,
  setIsOpen: () => {},
});

export function SideNavProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SideNavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SideNavContext.Provider>
  );
}
