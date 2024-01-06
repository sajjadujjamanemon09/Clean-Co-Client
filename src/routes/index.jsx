import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import About from "../page/About/About";
import Contact from "../page/Contact/Contact";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import AdminLayout from "../components/layout/AdminLayout/AdminLayout";
import AddService from "../page/AddService/AddService";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'contact',
                element: <Contact/>
            },
        ],
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/admin',
        element: <AdminLayout/>,
        children: [
            {
                path: "addService",
                element: <AddService/>
            },
        ],
    },
])

export default routes;