import * as contentful from "contentful";
import { client } from "@/src/lib/contentful/client";
import WritingSideNav from "./writingSideNav";

type BlogPostSkeleton = {
  contentTypeId: "pageBlogPost";
  fields: { publishedDate: contentful.EntryFieldTypes.Date };
};

async function getBlog() {
  const res = await client.getEntries<BlogPostSkeleton>({
    content_type: "pageBlogPost",
    order: ["-fields.publishedDate"],
  });
  return res.items;
}

export default async function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items = await getBlog();

  return (
    <div className="relative min-h-screen h-full w-full flex justify-between">
      <WritingSideNav posts={items} />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
