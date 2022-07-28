import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import { FLUSH, REHYDRATE, PAUSE, PERSIST,PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage"
import {persistReducer, persistStore} from "redux-persist";
import { authReducer } from './auth';
import reducer from "./contacts/reduser"


const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH,  REHYDRATE, PAUSE, PURGE, PERSIST, REGISTER]
        }
    })
]

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["token"],
}


export const store = configureStore({
    reducer: {  
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: reducer
        
    },
    middleware,
    devTools: true
});

export const persistor = persistStore(store);






