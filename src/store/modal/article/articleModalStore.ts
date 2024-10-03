import { create } from "zustand";

import type { IArticleModalStore } from "./interfaces";
import type { IArticle } from "../../news/interfaces";

export const articleModalStore = create<IArticleModalStore>()((set, get) => ({
  modal: false,
  article: null,
  triggerModal: (article?: IArticle) => {
    set({ modal: !get().modal, article: article ? article : null });
  }
}));
