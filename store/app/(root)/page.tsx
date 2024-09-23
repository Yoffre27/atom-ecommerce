import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";

import Image from "next/image";

export default function Home() {
  return (
    <>     
      <Collections />
      <ProductList />
    </>
  );
}

export const dynamic = "force-dynamic";

