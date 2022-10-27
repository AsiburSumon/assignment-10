import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Blog/Blog';
import CheckOut from '../CheckOut/CheckOut';
import CourseDetails from '../CourseDetails/CourseDetails';
import Courses from '../Courses/Courses';
import FAQ from '../FAQ/FAQ';
import Home from '../Home/Home';
import Main from '../layout/Main';
import Login from '../Login/Login/Login';
import Register from '../Login/Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import RightSideContainer from '../RightSideContainer/RightSideContainer';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch (`http://localhost:5000/course`)
            },
            {
                path: '/allcourses',
                element:<Courses></Courses>,
                loader: () => fetch (`http://localhost:5000/allcourses`)
            },
            {
                path: '/allcourses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/allcourses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/allcourses/${params.id}`)
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
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            }
        ])
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
      }
])