import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../modules/Auth/slice'
import contributorsReducer from '../modules/contributors/slice'


const store = configureStore({
    reducer: {
        auth: authReducer,
        contributors: contributorsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;