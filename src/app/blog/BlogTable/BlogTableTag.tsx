export default function BlogTableTag({ tag }: { tag: string }) {
  return (
    <li className="my-1 mr-1.5">
      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
        {tag}
      </div>
    </li>
  );
}
