import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextApiRequest, NextApiResponse } from "next";

const articlesDirectory = path.join(process.cwd(), "articles");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  console.log(id)

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Article ID is missing or invalid" });
  }

  const fullPath = path.join(articlesDirectory, `${id}.md`);

  if (!fs.existsSync(fullPath)) {
    return res.status(404).json({ error: "Article not found" });
  }

  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContents);

  return res.status(200).json({
    id,
    title: matterResult.data.title,
    description: matterResult.data.description || "",
    date: matterResult.data.date,
    contentHtml: matterResult.content,
  });
}
