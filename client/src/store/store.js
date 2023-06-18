import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { courseApi } from '../service/course';

const store = configureStore({
    reducer: {
        [courseApi.reducerPath]: courseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            courseApi.middleware,
        ]),
});

setupListeners(store.dispatch);

export default store