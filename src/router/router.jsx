import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import AllFoods from "../pages/AllFoods/AllFoods";
import PrivateRoute from "./PrivateRoute";
import FoodPurchase from "../pages/FoodDetails/FoodPurchase";
import MyOrder from "../pages/FoodDetails/MyOrder";
import AddFood from "../pages/AddFood/AddFood";
import MyFood from "../pages/AddFood/MyFood";
import UpdateFood from "../pages/AddFood/UpdateFood";
import GalleryPage from "../pages/Gallary/GalleryPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Page not found</h2>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'gallery',
                element: <GalleryPage></GalleryPage>
            },
            {
                path: '/allFoods',
                element: <AllFoods></AllFoods>,
            },
            {
                path: '/addFoods',
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute> ,
            },
            {
                path: '/myFoods',
                element: <PrivateRoute><MyFood></MyFood></PrivateRoute> ,
            },
            {
                path: '/update-food/:id',
                element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`),
            },
            {
                path: 'foods/:id',
                element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path: 'foodPurchase/:id',
                element: <PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path: 'my-order',
                element: <PrivateRoute><MyOrder></MyOrder></PrivateRoute>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>,
            },

        ]
    },
]);


export default router;