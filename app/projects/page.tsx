import { Button } from "@/src/components/ui/button";
import projects from "@/src/data/projects.json";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const gridClasses = "grid md:grid-cols-3 gap-2 md:gap-6";

export default async function Projects() {
  return (
    <div className="leading-6 px-4 pt-14 lg:pt-20 pb-16">
      <div className="mx-auto max-w-xl flex gap-16">
        <ul className={gridClasses}>
          {projects.map((x, index) => (
            <li
              key={index}
              className="flex-1 border border-zinc-200 dark:border-zinc-600 rounded-md p-4 flex flex-col justify-between gap-4 hover:scale-110 transition"
            >
              <div>
                <div className="flex items-center overflow-hidden">
                  <span className="flex-1 truncate font-semibold">
                    {x.title}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="flex-1 text-sm text-zinc-400">
                    {x.description}
                  </span>
                </div>
              </div>

              <Link
                href={x.link.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button
                  variant="secondary"
                  className="p-0 px-2 flex justify-between w-full"
                >
                  Go
                  <ArrowUpRight className="h-3 w-3 shrink-0" />
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
