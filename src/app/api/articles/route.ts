import { getAllArticles } from '@/repository/articles';
import { NextResponse } from 'next/server'

export async function GET() {
  const result = await getAllArticles();
  return NextResponse.json(result)
}