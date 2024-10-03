import type { IArticle } from "../../store/news/interfaces";

import { articleModalStore } from "../../store/modal/article/articleModalStore";
import { newsStore } from "../../store/news/newsStore";

import cn from "../../utils/cn";

const Article = ({ article }: { article: IArticle }): React.ReactElement => {
  const { triggerModal } = articleModalStore();
  const { removeArticle } = newsStore();

  const onEditHandler = (): void => {
    triggerModal(article);
  };

  const onRemoveHandler = (): void => {
    removeArticle(article);
  };

  return (
    <div className="flex-1 border border-gray-500 p-4">
      <h3 className="text-lg font-semibold">{article.name}</h3>
      <h2 className="text-gray-600">{article.author}</h2>
      <p className="mt-2 text-sm">{article.content}</p>
      <p className="mt-4 text-xs text-gray-600">{`Published: ${article.datePublish}`}</p>
      {article.dateEdited !== "" && (<p className="text-xs text-gray-600">Edited: {article.dateEdited as string}</p>)}

      <div className="flex gap-2 mt-6">
        <button
          onClick={onEditHandler}
          className={cn(`
            text-xs font-semibold border border-gray-600 
            transition-all hover:text-viollette py-2 
            px-4 rounded-md
          `)}
        >
          edit article
        </button>

        <button
          onClick={onRemoveHandler}
          className={cn(`
            text-xs font-semibold border border-gray-600 
            transition-all hover:text-viollette py-2 
            px-4 rounded-md
          `)}
        >
          remove article
        </button>
      </div>
    </div>
  );
};

export default Article;
