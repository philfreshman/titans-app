import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import rolesReducer from "@/src/store/slices/roleSlice";
import rightsReducer from "@/src/store/slices/rightsSlice";
import rightsRolesReducer from "@/src/store/slices/rightsRolesSlice";
import {PERSIST} from "redux-persist/es/constants";


const persistConfig = {
  key: 'root', // key is required
  storage, // storage is required
};

const rootReducer = combineReducers({
  roles: rolesReducer,
  rights: rightsReducer,
  rightsRoles: rightsRolesReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

const persist = persistStore(store);

export { store, persist };
