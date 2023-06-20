import LeftArrowIcon from "@/app/icons/LeftArrowIcon";
import { allPosts } from "contentlayer/generated";
import { parseISO, format } from "date-fns";
import Link from "next/link";

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

export default function BlogPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20  lg:py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
          aria-label="View Home Page"
        >
          <LeftArrowIcon />
          <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
            All Blogs
          </span>
        </Link>
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">{post.title}</h1>
        <p className="mb-3 text-gray-400">
          {format(parseISO(post.date), "LLLL d, yyyy")} &#8226; {post.readTime} min read
        </p>
        <div
          className="prose max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        ></div>
        <div className="mt-6">
          <Link
            href="/blog"
            className="group inline-flex items-center font-semibold leading-tight text-teal-300"
            aria-label="View Home Page"
          >
            <LeftArrowIcon />
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              All Blogs
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
