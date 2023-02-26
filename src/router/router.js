
import About from './../pages/About';
import Posts from './../pages/Posts';
import PostIdPage from './../pages/PostIdPage';
import Login from './../pages/Login';

export const privateRouterDirections = [
    {path: '/about', component: About, exact: true, element: <About/>},
    {path: '/posts', component: Posts, exact: true, element: <Posts/>},
    {path: '/posts/:id', component: PostIdPage, exact: true, element: <PostIdPage/>},
]

export const publicRouterDirections = [
    {path: '/login', component: Login, exact: true, element: <Login/>}
]