import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../layout/Layout';
import Booking from '../pages/Booking';
import Destinations from '../pages/Destinations';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/places'),
                element: <Home />,
            },
            {
                path: '/destinations',
                loader: () => fetch('http://localhost:5000/places'),
                element: <Destinations />,
            },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
            { path: '/hotels/:id', element: <Login /> },
            { path: '/booking/:id', element: <Booking /> },
        ],
    },
]);

export default router;
