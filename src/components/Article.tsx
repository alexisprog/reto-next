import { ArticleModel } from "@/model/article";
import Link from "./Link";
import { useAppDispatch } from "@/app/store";
import { addFav, removeFav } from "@/app/store/slices/favoritesSlice";
import ToggleFavorite from "./ToggleFavorite";

const ArticleComponent = ({article, isFav}: {article: ArticleModel, isFav: boolean}) => {
  const {id, title, content, author} = article;

  const dispatch = useAppDispatch();

  const handlerFavorites = (article: ArticleModel, isFav: boolean) => {
    dispatch(isFav ? removeFav(article) : addFav(article));
  }

  return (
    <li key={id} className="py-5">
      <article>
        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
          <div className="space-y-5 xl:col-span-3">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between">
                  <h2 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link
                      href={`/articles/${id}`}
                      className="text-gray-900 dark:text-gray-100"
                    >
                      {title}
                    </Link>
                  </h2>
                  <ToggleFavorite onClick={() => handlerFavorites(article, isFav)} isFavorite={isFav} />
                </div>
                
                <div className="flex flex-wrap">
                  <span
                    className="mr-3 text-sm font-medium uppercase text-primary-600"
                  >
                    {author}
                  </span>
                </div>
              </div>
              <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                {content}
              </div>
            </div>
            <div className="text-base font-medium leading-6">
              <Link
                href={`/articles/${id}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`ver detalles: "${title}"`}
              >
                ver detalles &rarr;
              </Link>
            </div>
          </div>
        </div>
      </article>
    </li>
  )
}

export default ArticleComponent;