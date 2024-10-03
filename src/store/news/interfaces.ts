export interface IArticle {
  id: string;
  name: string;
  datePublish: Date | string;
  dateEdited: Date | string;
  author: string;
  content: string;
}

export interface INewsStore {
  news: IArticle[];
  addArticle: (arcticle: IArticle) => void;
  updateArticle: (arcticle: IArticle) => void;
  removeArticle: (arcticle: IArticle) => void;
}
