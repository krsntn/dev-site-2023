"use client";

import {useEffect} from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";
import css from './article.module.css';

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
      const { theme } = useTheme();
      if (node.data.target.sys.contentType.sys.id === "codeBlock") {
        return (
          <SyntaxHighlighter
            language={node.data.target.fields.language}
            style={theme === "light" ? oneLight : oneDark}
          >
            {node.data.target.fields.code}
          </SyntaxHighlighter>
        );
      } else if (
        node.data.target.sys.contentType.sys.id === "componentRichImage"
      ) {
        const { fullWidth, image } = node.data.target.fields;
        return (
          <div className={`${fullWidth ? "px-8" : ""}`}>
            <Image
              src={`https:${image.fields.file.url}`}
              alt={image.fields.title}
              width={400}
              height={100}
              className={`rounded ${fullWidth ? "w-full" : ""}`}
            />
          </div>
        );
      }
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      if (node.data.target.sys.type === "Asset") {
        const { title, file } = node.data.target.fields;
        return (
          <div className="px-8">
            <Image
              src={`https:${file.url}`}
              alt={title}
              width={400}
              height={100}
              className="rounded w-full"
            />
          </div>
        );
      }
    },
  },
};

export default function PostBody({ content }: { content: Document }) {

  useEffect(() => {
    const elements = document.querySelectorAll(`.${css.article} > *`);

    elements.forEach((element, index) => {
      const delay = index * 0.06; 
      element.style.animation = `1s ease ${delay}s 1 both ${css.slideEnter}`;
    });
  }, [])
  

  return (
    <article className={`${css.article} prose dark:prose-invert`}>
      {documentToReactComponents(content, options)}
    </article>
  );
}
