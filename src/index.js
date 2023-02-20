import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, {loader as postsLoader} from './routs/App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import NewPost, {action as newPostAction} from "./routs/NewPost";
import RootLayout from "./routs/RootLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            //nested routes, share same MainHeader
            {
                path: "/",
                element: <App/>,
                loader: postsLoader,
                children: [
                    {path: "/create-post", element: <NewPost/>, action:newPostAction}
                ]
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);


reportWebVitals();
