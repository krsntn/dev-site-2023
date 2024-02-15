"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import PostList from "./PostList";
import { useDebounce } from "./useDebounce";

const WritingSideNav = ({ posts }: { posts: any[] }) => {
  const [searchValue, setSearchValue] = useState("");
  const path = usePathname().split("/").slice(-1)[0];
  const router = useRouter();

  const debounceSearchValue = useDebounce(searchValue, 400);

  if (debounceSearchValue) {
    posts = posts.filter((x) =>
      x.fields.title.toLowerCase().includes(debounceSearchValue.toLowerCase()),
    );
  }

  return (
    <div
      className={`overflow-y-auto border-l border-r border-zinc-200 dark:border-zinc-700 w-full lg:w-80 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-1000 ease-linear ${
        path !== "writing" ? "hidden lg:block" : ""
      }`}
    >
      <input
        placeholder="Search"
        className="bg-transparent p-4 w-full outline-none text-sm"
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            if (posts.length > 0) {
              router.push(`/writing/${posts[0].fields.slug}`);
            }
          }
        }}
      />
      <PostList posts={posts} />
    </div>
  );
};

export default WritingSideNav;
