"use client";

import List from '@/components/List';
import { useAppSelector } from '../store';

export default function Articles() {
  const {favorites: data} = useAppSelector((state) => state.favorites);

  if (!data) return null;

  return (
    <main className="p-24">
      <div className="flex flex-col items-center justify-between gap-8">
        <h1 className="text-3xl">Favoritos</h1>
          <List data={data} />
      </div>
    </main>
  );
}