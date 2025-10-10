import { defineDocumentType, makeSource } from "@contentlayer/source-files";
import rehypePrism from 'rehype-prism-plus'

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    id: { type: "number", required: true },
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    readTime: { type: "number", required: true },
    tags: { type: "list", required: true, of: { type: "string" } },
    image: { type: "string", required: true },
  },
  computedFields: {
    url: { type: "string", resolve: (post) => `/posts/${post._raw.flattenedPath}` },
    slug: { type: "string", resolve: (post) => post._raw.flattenedPath },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  markdown: {
    rehypePlugins: [rehypePrism],
  },
})
