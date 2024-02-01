import { ArticleModel } from "@/model/article";

export const getAllArticles = async (): Promise<ArticleModel[]> => {
  const response = await fetch(`${process.env.PATH_URL_BACKEND}/articles.json?key=a85448f0`);
  const articles = await response.json();
  return articles;
}

export const getOneArticle = async (id: string): Promise<ArticleModel> => {
  const response = await fetch(`${process.env.PATH_URL_BACKEND}/articles/${id}.json?key=a85448f0`);
  const article = await response.json();
  return article;
}