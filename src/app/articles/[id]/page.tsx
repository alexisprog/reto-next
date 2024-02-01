'use client'
import { useRouter } from "next/navigation";
import { ArticleModel } from '@/model/article';
import { fetcher } from '@/libs';
import useSWR from "swr";
import PageTitle from '@/components/PageTitle';
import Link from '@/components/Link';

const Detail = ({params}: {params:{id :string}}) => {
  const router = useRouter();
  const { data: article, error, isLoading } = useSWR<ArticleModel>(`/api/articles/${params.id}`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!article) return null;
  
  return (
    <article>
      <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
        <header className="pt-6 xl:pb-6">
          <div className="space-y-1 text-center">
            <div>
              <PageTitle>{article.title}</PageTitle>
            </div>
          </div>
        </header>
        <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
          <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
            <dd>
              <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                <li className="flex items-center space-x-2">
                  <dl className="whitespace-nowrap text-sm font-medium leading-5">
                    <dd className="text-gray-900 dark:text-gray-100">author:</dd>
                    <dd className="text-gray-900 dark:text-gray-100">{article.author}</dd>
                  </dl>
                </li>
              </ul>
            </dd>
          </dl>
          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
            <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">
              <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                {article.content}
              </div>
            </div>
          </div>
          <footer>
            <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                <div className="pt-4 xl:pt-8">
              <button
                onClick={() => router.back()}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              >
                &larr; Regresar
              </button>
            </div>
            </div>
            
          </footer>
        </div>
      </div>
    </article>
  );
};

export default Detail;