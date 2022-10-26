import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Blog/Blog';
import Courses from '../Courses/Courses';
import Main from '../layout/Main';
import Login from '../Login/Login/Login';
import Register from '../Login/Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ])
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
      }
])