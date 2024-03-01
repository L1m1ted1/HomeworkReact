import {createBrowserRouter, Navigate, NavLink} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {AlbumsPage} from "./pages/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {TodosPage} from "./pages/TodosPage";
import {ErrorPage} from "./pages/ErrorPage/ErrorPage";
import {PostPage} from "./pages/PostPage";


const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, errorElement: <ErrorPage/> , children: [
            {
                index:true, element: <Navigate to={'albums'}/>,
            },
            {
                path: 'albums', element: <AlbumsPage/>
            },
            {
                path: 'comments', element: <CommentsPage/>
            },
            {
                path: 'post', element: <PostPage/>
            },
            {
                path: 'todos', element: <TodosPage/>
            }
        ]}

])

export default router;