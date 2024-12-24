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
                path: '/allFoods',
                element: <AllFoods></AllFoods>,
            },
            {
                path: 'foods/:id',
                element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path: 'foodPurchase/:id',
                element: <FoodPurchase></FoodPurchase>,
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path: 'my-order',
                element: <MyOrder></MyOrder>,
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