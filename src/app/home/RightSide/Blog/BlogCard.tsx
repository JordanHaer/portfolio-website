import RightArrowIcon from "@/app/icons/RightArrowIcon";
import Image from "next/image";
import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <li className="mb-12">
      <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <Image
          alt={post.title}
          loading="lazy"
          width="200"
          height="48"
          decoding="async"
          data-nimg="1"
          className="z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"
          src={post.image}
        />

        <div className="z-10 col-span-6">
          <p className="-mt-1 text-sm font-semibold leading-normal">{format(parseISO(post.date), "LLLL yyyy")}</p>
          <h3 className="-mt-1">
            <Link
              className="group/link inline-flex items-baseline text-base font-medium leading-normal text-slate-200  hover:text-teal-300 focus-visible:text-teal-300"
              href={`/blog/${post.slug}`}
              aria-label={post.title}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                  {post.title}
                </span>
                <span className="inline-block">
                  <RightArrowIcon />
                </span>
              </span>
            </Link>
          </h3>
        </div>
      </div>
    </li>
  );
}
