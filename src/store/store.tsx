import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {todoSlice} from "@/modules/todo/userinterface/store/todo-slice.tsx";

const reducer = combineReducers({
    todo: todoSlice.reducer,
});

export const createStore = () => configureStore({
    reducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type AppStore = ReturnType<typeof createStore>;
export type AppState = ReturnType<typeof reducer>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
