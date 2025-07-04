import Link from "next/link";

export default function Home() {
  return (
    <div className="font-geist-mono flex items-center justify-center flex-col h-screen">
      <div className="flex flex-col items-start">
      <h1 className=" text-xl">This is being made with wix cms</h1>
      <p className="py-6">Wanna see some content? Checkout <Link className="font-bold" href="/blog">blog </Link>for some content. 😉</p>
      </div>
    </div>
  );
}
