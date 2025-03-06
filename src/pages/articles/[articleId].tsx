import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { bahianita, justAnotherHand, teko } from "../../../lib/fonts";

const Article = () => {
  const [articleData, setArticleData] = useState<{ id: string; contentHtml: string; title: string; description: string; date: string } | null>(null);
  const router = useRouter();
  const { articleId } = router.query; // ✅ Use destructuring for cleaner code

  useEffect(() => {
    if (!articleId) return;
    console.log(articleId) // ✅ Ensure articleId is available

    const fetchArticle = async () => {
      try {
        const res = await fetch(`/api/articles/${articleId}`);
        if (!res.ok) throw new Error("Failed to fetch article");
        const data = await res.json();
        setArticleData(data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (!articleData) return <p>Loading...</p>;

  return (
    <section className={`${bahianita.className} article mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5`}>
      <div className="flex justify-between font-poppins">
        <Link href={"/"} className="flex flex-row gap-1 place-items-center text-2xl">
          <ArrowLeftIcon width={20} />
          <p>back to home</p>
        </Link>
        <p className="text-3xl">{articleData.date.toString()}</p>
      </div>
      <article
        className={`${justAnotherHand.className} text-4xl text-neutral-900 text-center`}
        dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
      />
    </section>
  );
};

export default Article;
