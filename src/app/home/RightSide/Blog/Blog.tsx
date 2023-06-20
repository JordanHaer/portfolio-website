import BlogCard from "./BlogCard";
import ViewAll from "../ViewAll";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export default function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))).slice(0, 3);
  return (
    <section id="blog" aria-label="Blog">
      <div className="pt-14 lg:pb-0 lg:pt-24">
        <div className="bg-inherit/75 sticky top-0 z-20 -mx-6 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:hidden lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-3xl font-extrabold text-slate-200 sm:text-4xl lg:hidden">Blog</h2>
        </div>
        <h2 className="hidden font-bold leading-tight tracking-tight text-slate-200 lg:block lg:pb-12 lg:pt-2 lg:text-5xl">
          Blog
        </h2>
        <ul className="group/list">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </ul>
        <ViewAll href={"/blog"} label={"Blog Posts"} />
      </div>
    </section>
  );
}
