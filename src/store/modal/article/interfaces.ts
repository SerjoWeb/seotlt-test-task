import type { IArticle } from "../../news/interfaces";

export interface IArticleModalStore {
  modal: boolean;
  article?: IArticle | null | undefined;
  triggerModal: (article?: IArticle) => void;
}
