import { allPosts } from "contentlayer/generated";
import { compareAsc } from "date-fns";
import BlogTableRow from "./BlogTableRow";

export default async function BlogTable() {
  const posts = allPosts.sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)));
  return (
    <table id="content" className="mt-12 w-full border-collapse overflow-x-auto text-left ">
      <thead className=" border-b border-slate-300/10 px-6 py-5  ">
        <tr>
          <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Title/Blog Link</th>
          <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">Description</th>
          <th className=" py-4 pr-8 text-sm font-semibold text-slate-200 ">Tags</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <BlogTableRow key={post.id} post={post} />
        ))}
      </tbody>
    </table>
  );
}
