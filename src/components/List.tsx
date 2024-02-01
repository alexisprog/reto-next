"use client";

import { ArticleModel } from '@/model/article';
import { useAppSelector } from "@/app/store";
import Article from './Article';


const List = ({data}: {data: ArticleModel[]}) => {
  const favorites = useAppSelector((state) => state.favorites.favorites);
  
  return (
    <ul className="space-y-4">
      {data.map((article, index) => {
        const isFav = favorites.some(f => f.id === article.id);
        return <Article key={index} isFav={isFav} article={article} />
      })}
    </ul>
  );
};

export default List;