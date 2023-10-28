import BlogCard from "./BlogCard";
import View from "../View";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export default function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))).slice(0, 3);
  return (
    <section id="blog" aria-label="Blog">
      <div className="pt-20 lg:pt-24">
        <h2 className="pb-12 text-4xl font-bold leading-tight tracking-tight text-slate-200  lg:pt-2 lg:text-5xl">
          Blog
        </h2>
        <ul className="group/list">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </ul>
        <View href={"/blog"} label={"View all Blog Posts"} />
      </div>
    </section>
  );
}
