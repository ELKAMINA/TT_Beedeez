import {persistStore, persistReducer} from 'redux-persist';
import {rootPersistConfig, rootReducer} from './rootReducer';
import {configureStore} from '@reduxjs/toolkit';

// A slice represents a single unit of Redux state. It’s a collection of reducer logic and actions for a single feature in your app, typically defined together in a single file.
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    persistedReducer,
  },
  middleware: (
    getDefaultMiddleware, // allow us to customize the dispatch function
  ) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
  devTools: true,
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// ----------------------------------------------------------------------
