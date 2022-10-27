import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Blog/Blog';
import CheckOut from '../CheckOut/CheckOut';
import CourseDetails from '../CourseDetails/CourseDetails';
import Courses from '../Courses/Courses';
import Home from '../Home/Home';
import Main from '../layout/Main';
import Login from '../Login/Login/Login';
import Register from '../Login/Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch (`https://server-for-assignment10.vercel.app/course`)
            },
            {
                path: '/allcourses',
                element:<Courses></Courses>,
                loader: () => fetch (`https://server-for-assignment10.vercel.app/allcourses`)
            },
            {
                path: '/allcourses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`https://server-for-assignment10.vercel.app/allcourses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({params}) => fetch(`https://server-for-assignment10.vercel.app/allcourses/${params.id}`)
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