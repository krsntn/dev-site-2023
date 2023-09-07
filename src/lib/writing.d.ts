type GithubDataType = {
  html_url: string;
  name: string;
};

export interface BlogPost {
  title: string;
  slug: string;
  body: RichTextDocument | null;
  image: ContentImage | null;
}
