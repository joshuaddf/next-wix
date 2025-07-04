import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex items-center justify-center flex-col h-screen">
      <div className="flex flex-col items-start px-6">
      <h1 className="text-lg">What's up sugarr? <span className="text-black/[.3]">(salt)</span>😏 </h1>
      <p className="py-6">Wanna see some content?? Checkout <Link className="font-semibold bg-rose-200/[0.9]" href="/blog">blog</Link> for some content. 😉</p>
      </div>
    </div>
  );
}
