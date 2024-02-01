import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import { favoritesReducer } from "./slices/favoritesSlice";
import storage from "./customStorage";
// import storage from 'redux-persist/lib/storage';
import logger from "redux-logger";

const authPersistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['favorites'],
};

const rootReducer = combineReducers({
  favorites: favoritesReducer
});

const reducer = persistReducer(
  authPersistConfig,
  rootReducer,
);

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;