import { Post } from "contentlayer/generated";
import BlogTableLink from "./BlogTableLink";
import BlogTableTag from "./BlogTableTag";
import "./BlogTableRow.css";

export default function BlogTableRow({ post }: { post: Post }) {
  return (
    <tr className="border-b border-slate-300/10 last:border-none">
      <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
        <BlogTableLink title={post.title} blogLink={`/blog/${post.slug}`} />
      </td>
      <td className="hidden py-4 pr-4 align-top text-sm sm:table-cell">
        <div className="content translate-y-px " dangerouslySetInnerHTML={{ __html: post.body.html }}></div>
      </td>
      <td className=" py-4 pr-4 align-top sm:table-cell">
        <ul className="flex -translate-y-1.5 flex-wrap">
          {post.tags.sort().map((tag: string) => (
            <BlogTableTag key={tag} tag={tag} />
          ))}
        </ul>
      </td>
    </tr>
  );
}
