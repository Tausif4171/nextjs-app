import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="flex text-[22px] text-[#000000] font-semibold">NextJS Learning! 🎉</h1>
      <Link href='/users'><p className="flex text-[18px] text-[#000000]">Users List</p></Link>
      <ProductCard />
    </main>
  );
}
