"use client";

import Logo from "@/src/components/logo";
import { Button } from "@/src/components/ui/button";
import { SideNavContext } from "@/src/context/sideNavProvider";
import projects from "@/src/data/projects.json";
import {
  ArrowLeft,
  ArrowUpRight,
  Palette,
  Camera,
  FileCode2,
  Github,
  Home,
  Moon,
  Pen,
  SquareCode,
  Sun,
  Twitter,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";

const buttonClasses = "text-[12px] w-full px-2 py-1 flex justify-start";

const SideNav = () => {
  const { isOpen, setIsOpen } = useContext(SideNavContext);
  const { setTheme, theme } = useTheme();

  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-[100%] lg:translate-x-0"
      } lg:w-auto z-50 absolute lg:static transition-transform duration-500 ease-in-out`}
    >
      <div
        className={`p-4 overflow-y-auto
          h-[100dvh] w-64 lg:w-48
          text-[12px] font-bold flex flex-col justify-between bg-zinc-50 dark:bg-zinc-900 transition-colors duration-1000 ease-linear`}
      >
        <div>
          <div className="mb-8">
            <div className="flex justify-between items-center px-2 mb-3">
              <div className="flex items-baseline">
                <Logo />
                <span className="-ml-[1px]">arson</span>
              </div>

              <Button
                variant="link"
                className="p-0 lg:hidden"
                onClick={() => setIsOpen(false)}
              >
                <ArrowLeft size="16" />
              </Button>
            </div>

            <ul className="flex flex-col gap-1">
              <li>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className={buttonClasses}>
                    <Home className="mr-2 h-3 w-3" /> Home
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center px-2 mb-2 text-[10px]">
              Me
            </div>

            <ul className="flex flex-col gap-1">
              <li>
                <Link href="/dev" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className={buttonClasses}>
                    <SquareCode className="mr-2 h-3 w-3" /> Frontend Dev
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/design" onClick={() => setIsOpen(false)}>
                  <Button
                    variant="ghost"
                    className={buttonClasses}
                    onClick={() => {}}
                  >
                    <Palette className="mr-2 h-3 w-3" /> Design
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/photography" onClick={() => setIsOpen(false)}>
                  <Button
                    variant="ghost"
                    className={buttonClasses}
                    onClick={() => {}}
                  >
                    <Camera className="mr-2 h-3 w-3" /> Photography
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/writing" onClick={() => setIsOpen(false)}>
                  <Button
                    variant="ghost"
                    className={buttonClasses}
                    onClick={() => {}}
                  >
                    <Pen className="mr-2 h-3 w-3" /> Writing
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center px-2 mb-2 text-[10px]">
              Recents Projects
            </div>

            <ul className="flex flex-col gap-1">
              {projects.slice(0, 4).map((x, index) => (
                <li key={index}>
                  <Link
                    href={x.link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    onClick={() => setIsOpen(false)}
                  >
                    <Button
                      variant="ghost"
                      className={twMerge(
                        buttonClasses,
                        "justify-between gap-3",
                      )}
                    >
                      <div className="flex items-center overflow-hidden">
                        <FileCode2 className="mr-2 h-3 w-3" />
                        <span className="flex-1 truncate">{x.title}</span>
                      </div>
                      <ArrowUpRight className="h-3 w-3 shrink-0" />
                    </Button>
                  </Link>
                </li>
              ))}
              <li>
                <Link href={"/projects"} onClick={() => setIsOpen(false)}>
                  <Button
                    variant="ghost"
                    className={twMerge(buttonClasses, "justify-between gap-3")}
                  >
                    <div className="flex items-center overflow-hidden">
                      <div className="mr-2 h-3 w-3" />
                      <span className="flex-1 truncate">more...</span>
                    </div>
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center px-2 mb-2 text-[10px]">
              Online
            </div>

            <ul className="flex flex-col gap-1">
              <li>
                <Link
                  href="https://twitter.com/ooneoneo"
                  rel="noopener noreferrer"
                  target="_blank"
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className={twMerge(buttonClasses, "justify-between gap-3")}
                  >
                    <div className="flex items-center overflow-hidden">
                      <Twitter className="mr-2 h-3 w-3" />
                      <span className="flex-1 truncate">Twitter</span>
                    </div>
                    <ArrowUpRight className="h-3 w-3 shrink-0" />
                  </Button>
                </Link>
              </li>

              <li>
                <Link
                  href="https://github.com/krsntn"
                  rel="noopener noreferrer"
                  target="_blank"
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className={twMerge(buttonClasses, "justify-between gap-3")}
                  >
                    <div className="flex items-center overflow-hidden">
                      <Github className="mr-2 h-3 w-3" />
                      <span className="flex-1 truncate">Github</span>
                    </div>
                    <ArrowUpRight className="h-3 w-3 shrink-0" />
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <Button
            variant="secondary"
            className="h-auto p-2"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-3 w-3 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-3 w-3 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
