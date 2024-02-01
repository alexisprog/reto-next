import { getOneArticle } from '@/repository/articles'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request : NextRequest, { params }: { params: { id: string } }) {
  const result = await getOneArticle(params.id);
  return NextResponse.json(result)
}