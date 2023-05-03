import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import ChefRecipesPage from '../pages/ChefRecipesPage/ChefRecipesPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: 'chef/:id/recipes',
                element: (
                    <PrivateRoute>
                        <ChefRecipesPage />
                    </PrivateRoute>
                ),
            },
        ],
    },
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'register',
                element: <RegistrationPage />,
            },
        ],
    },
    {
        path: '*',
        element: <MainLayout />,
        children: [
            {
                path: '404',
                element: <NotFoundPage />,
            },
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },
]);

export default router;
