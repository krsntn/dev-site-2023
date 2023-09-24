"use client";

import { usePathname } from "next/navigation";
import PostList from "./PostList";

const WritingSideNav = ({ posts }: { posts: any[] }) => {
  const path = usePathname().split("/").slice(-1)[0];

  return (
    <div
      className={`overflow-y-auto border-l border-r border-zinc-200 dark:border-zinc-700 w-full lg:w-80 bg-zinc-50 dark:bg-zinc-900 ${
        path !== "writing" ? "hidden lg:block" : ""
      }`}
    >
      <PostList posts={posts} />
    </div>
  );
};

export default WritingSideNav;
