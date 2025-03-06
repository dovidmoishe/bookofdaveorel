import React from "react";
import Link from "next/link";

interface ArticleItem {
  id: string;
  title: string;
  description: string;
  // Add other properties as needed
}

interface ArticlesProps {
  articles: ArticleItem[];
}

const PostCard = ({ title, description }: ArticleItem) => {
  return (
    <div className="text-2xl p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  if (!articles || !Array.isArray(articles)) {
    return <div>No articles available</div>;
  }

  return (
    <div>
      {articles.map((article: ArticleItem) => (
        <div key={article.id}>
          <Link href={`/articles/${article.id}`}>
            <PostCard id={article.id} title={article.title} description={article.description} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Articles;
