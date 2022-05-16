import {configureStore} from '@reduxjs/toolkit'
import phimReducer from './Reducers/phimReducer'
import nguoiDungReducer from './Reducers/nguoiDungReducer'

export const store = configureStore({
    reducer: {
    // Khai báo state
        phimReducer: phimReducer,
        nguoiDungReducer: nguoiDungReducer,
    }
})