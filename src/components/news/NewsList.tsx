import { Fragment } from "react";
import { newsStore } from "../../store/news/newsStore";

import Article from "./Article";

const NewsList = (): React.ReactElement => {
  const { news } = newsStore();
  
  return (
    <Fragment>
      {news.length ? (
        <div className="w-full flex flex-wrap gap-2 mt-6">
          {news.map(article => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="w-full flex justify-center items-center">
          <p>There are no news yet</p>
        </div>
      )}
    </Fragment>
  );
};

export default NewsList;
