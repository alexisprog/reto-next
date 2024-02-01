"use client";

import { fetcher } from '@/libs';
import { ArticleModel } from '@/model/article';
import useSWR from "swr";
import List from '@/components/List';

export default function Articles() {
  const { data, error, isLoading } = useSWR<ArticleModel[]>(`/api/articles`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <main className="p-24">
      <div className="flex flex-col items-center justify-between gap-8">
        <List data={data} />
      </div>
    </main>
  );
}