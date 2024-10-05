import { createRoot } from 'react-dom/client'
import './assets/styles/index.scss'
import App from './App.tsx'
import {Provider} from "react-redux";
import {createStore} from "@/store/store.tsx";

createRoot(document.getElementById('root')!).render(
    <Provider store={createStore()}>
        <App />
    </Provider>,
)
