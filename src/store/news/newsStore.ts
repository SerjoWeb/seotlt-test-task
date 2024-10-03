import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LOCAL_STORAGE_STORE_NAME } from "./constants";

import type { IArticle, INewsStore } from "./interfaces";

export const newsStore = create<INewsStore>()(persist((set, get) => ({
  news: localStorage.getItem(LOCAL_STORAGE_STORE_NAME)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_STORE_NAME)!)
    : [],

  addArticle: (article: IArticle) => {
    const news: IArticle[] = [...get().news, article];
    set({ news });
  },

  updateArticle: (article: IArticle) => {
    const news: IArticle[] = get().news;

    news.forEach(a => {
      if (a.id === article.id) {
        Object.assign(a, article);
      }
    });

    set({ news });
  },

  removeArticle: (article: IArticle) => {
    const news: IArticle[] = get().news.filter(a => a.id !== article.id);
    set({ news });
  }
}), {
  name: LOCAL_STORAGE_STORE_NAME
}));
