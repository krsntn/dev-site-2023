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
  Home,
  Moon,
  Pen,
  SquareCode,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";

const buttonClasses = "text-[12px] w-full px-2 py-1 flex justify-start";

const SideNav = () => {
  const { isOpen, setIsOpen } = useContext(SideNavContext);
  const { setTheme, resolvedTheme } = useTheme();

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
                  href="https://bsky.app/profile/krsn.xyz"
                  rel="noopener noreferrer"
                  target="_blank"
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className={twMerge(buttonClasses, "justify-between gap-3")}
                  >
                    <div className="flex items-center overflow-hidden">
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="24"
                        className="mr-2 h-3 w-3"
                      >
                        <path
                          d="M12 10.8c-1.087 -2.114 -4.046 -6.053 -6.798 -7.995C2.566 0.944 1.561 1.266 0.902 1.565 0.139 1.908 0 3.08 0 3.768c0 0.69 0.378 5.65 0.624 6.479 0.815 2.736 3.713 3.66 6.383 3.364 0.136 -0.02 0.275 -0.039 0.415 -0.056 -0.138 0.022 -0.276 0.04 -0.415 0.056 -3.912 0.58 -7.387 2.005 -2.83 7.078 5.013 5.19 6.87 -1.113 7.823 -4.308 0.953 3.195 2.05 9.271 7.733 4.308 4.267 -4.308 1.172 -6.498 -2.74 -7.078a8.741 8.741 0 0 1 -0.415 -0.056c0.14 0.017 0.279 0.036 0.415 0.056 2.67 0.297 5.568 -0.628 6.383 -3.364 0.246 -0.828 0.624 -5.79 0.624 -6.478 0 -0.69 -0.139 -1.861 -0.902 -2.206 -0.659 -0.298 -1.664 -0.62 -4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"
                          fill="#fff"
                          stroke-width="1"
                        ></path>
                      </svg>
                      <span className="flex-1 truncate">Bluesky</span>
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
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="16"
                        className="mr-2 h-3 w-3"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.999285333333333 0.26666666666666666C3.72944 0.26666666666666666 0.26666666666666666 3.728992 0.26666666666666666 8.000256c0 3.4162773333333334 2.2156266666666666 6.315050666666666 5.28864 7.338090666666666 0.3869226666666667 0.07071999999999999 0.5279146666666666 -0.168 0.5279146666666666 -0.37312 0 -0.18378666666666668 -0.006645333333333334 -0.6698666666666666 -0.010442666666666666 -1.3150933333333334 -2.1510613333333333 0.4672 -2.6049173333333333 -1.0368 -2.6049173333333333 -1.0368 -0.35178666666666664 -0.89344 -0.8588053333333333 -1.1313066666666667 -0.8588053333333333 -1.1313066666666667 -0.702144 -0.47946666666666665 0.05317333333333333 -0.4699733333333333 0.05317333333333333 -0.4699733333333333 0.7762026666666666 0.05461333333333333 1.18448 0.7971199999999999 1.18448 0.7971199999999999 0.6898026666666667 1.1815466666666665 1.8101973333333332 0.8402133333333333 2.2507626666666667 0.6422399999999999 0.07026133333333333 -0.4994133333333333 0.2701226666666667 -0.84032 0.49088 -1.0334933333333334 -1.717152 -0.19562666666666667 -3.522592 -0.8587946666666666 -3.522592 -3.822144 0 -0.844576 0.3014613333333333 -1.534368 0.7961386666666667 -2.075104 -0.07975466666666667 -0.19559466666666667 -0.3451306666666667 -0.9817813333333333 0.07595733333333332 -2.046634666666667 0 0 0.6489706666666667 -0.20794666666666667 2.1263786666666666 0.7923413333333333 0.6166933333333334 -0.17138133333333333 1.2784853333333333 -0.256832 1.936 -0.26016 0.6570453333333333 0.003328 1.318368 0.08877866666666666 1.9360106666666665 0.26016 1.476448 -1.000288 2.124448 -0.7923413333333333 2.124448 -0.7923413333333333 0.42208 1.0648533333333332 0.15669333333333332 1.85104 0.07744 2.046634666666667 0.49557333333333337 0.5407359999999999 0.7946666666666666 1.230528 0.7946666666666666 2.075104 0 2.9709440000000003 -1.80832 3.624704 -3.530645333333333 3.815957333333333 0.277248 0.23882666666666666 0.5245973333333334 0.71072 0.5245973333333334 1.43232 0 1.0334933333333334 -0.009503999999999999 1.8676266666666665 -0.009503999999999999 2.121173333333333 0 0.20693333333333333 0.139584 0.44768 0.5317226666666667 0.37216C13.519573333333334 14.312426666666665 15.733333333333333 11.416 15.733333333333333 8.000256 15.733333333333333 3.728992 12.270506666666668 0.26666666666666666 7.999285333333333 0.26666666666666666Z"
                          fill="#fff"
                          stroke-width="1"
                        ></path>
                      </svg>
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
            onClick={() =>
              setTheme(resolvedTheme !== "dark" ? "dark" : "light")
            }
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
