import { client } from "@/src/lib/contentful/client";
import Image from "next/image";
import { Document } from "@contentful/rich-text-types";
import PostBody from "./postBody";
import { format } from "date-fns";

async function getPost({ slug }: { slug: string }) {
  const res = await client.getEntries({
    content_type: "pageBlogPost",
    "fields.slug": slug,
  });

  console.log(res.items);
  if (res.items.length < 1) {
    throw new Error("No article found");
  }
  return res.items[0];
}

type TFeaturedImage = {
  fields: { file: { url: string } };
};

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPost({ slug });

  const featuredImg = (post.fields.featuredImage as TFeaturedImage).fields.file
    .url;

  return (
    <div className="leading-6 px-4 pt-14 lg:pt-20 pb-16 min-h-[100dvh]">
      <div className="mx-auto max-w-xl flex flex-col gap-16">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-[1.5rem] leading-none font-bold text-black dark:text-white">
              {post.fields.title?.toString()}
            </span>
            <span className="text-[12px]">
              {format(
                new Date(post.fields.publishedDate?.toString() as string),
                "MMM yyyy",
              )}
            </span>
          </div>
          <Image
            src={`https:${featuredImg}`}
            width={600}
            height={100}
            alt="featured image"
            className="rounded"
          />
          <PostBody content={post.fields.content as Document} />
        </div>
      </div>
    </div>
  );
}
