import Image from "next/image";
import { Metadata } from "next";
import Logo from "../../public/assets/logo.jpeg";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

import { justAnotherHand, teko } from "../../lib/fonts";
import Articles from "@/components/Articles";
import { getSortedArticles } from "../../lib/articles";

export const metadata: Metadata = {
  title: "BookOfDaveOrel",
  description: "Fill your heart up with the knowledge of God and His word",
};


export async function getStaticProps() {
  const articles = getSortedArticles()

  return {
    props: { articles },
  }
}

export default function Home({ articles }) {
console.log(articles)
  return (
    <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
      <header
        className={`${teko.className}  text-6xl text-neutral-900 text-center`}
      >
        <h1>Fill your heart up with the knowledge of God and His word</h1>
      </header>
      <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
       <Articles articles={articles} />
      </section>
    </section>
  );
}
