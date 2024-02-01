import { ArticleModel } from "@/model/article";
import { FavoritesModel } from "@/model/favorite";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: FavoritesModel = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFav: (state, action: PayloadAction<ArticleModel>) => {
      state.favorites.push(action.payload);
    },
    removeFav: (state, action: PayloadAction<ArticleModel>) => {
      state.favorites = state.favorites.filter(f => f.id !== action.payload.id);
    },
  },
});

export const { addFav, removeFav } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;