"use client";

import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { format } from "date-fns";
import { usePathname } from "next/navigation";

export default function PostList({ posts }: { posts: any[] }) {
  const path = usePathname().split("/").slice(-1)[0];

  return (
    <ul className="flex flex-col pb-28">
      {posts.map((x, index) => (
        <li
          key={index}
          className="first:border-t border-b border-zinc-200 dark:border-zinc-700"
        >
          <Link href={`/writing/${x.fields.slug}`} rel="noopener noreferrer">
            <Button
              variant="ghost"
              className={`h-auto w-full py-2 rounded-none flex flex-col items-start gap-2 text-left text-[12px] ${
                path === x.fields.slug ? "bg-zinc-200 dark:bg-zinc-700" : ""
              }`}
            >
              <div>{x.fields.title}</div>
              <div className="text-[10px]">
                {format(new Date(x.fields.publishedDate), "MMM yyyy")}
              </div>
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
}
