"use client";

import { Button } from "@/src/components/ui/button";
import { Menu, ArrowLeft } from "lucide-react";
import { useContext } from "react";
import { SideNavContext } from "@/src/context/sideNavProvider";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Topbar = () => {
  const { setIsOpen } = useContext(SideNavContext);
  const pathname = usePathname();
  const isPostPage = pathname.startsWith("/writing/");

  return (
    <div className="p-4 lg:hidden">
      {isPostPage ? (
        <Link href={"/writing"}>
          <Button variant="ghost" className="p-1">
            <ArrowLeft size="16" />
          </Button>
        </Link>
      ) : (
        <Button
          variant="ghost"
          className="p-1"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <Menu size="16" />
        </Button>
      )}
    </div>
  );
};

export default Topbar;
