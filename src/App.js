import { RouterProvider, createBrowserRouter } from "react-router-dom";
//import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

/* const routedef = createRoutesFromElements(
  <Route>
    <Route path= "/" element= {<HomePage />}></Route>
  </Route>
)
const router = createBrowserRouter(routedef); */

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            /* { path: "/", element: <HomePage /> }, */
            { index: true, element: <HomePage /> },
            { path: "/products", element: <Products /> },
            { path: "/products/:id", element: <ProductDetailsPage /> },
        ],
        errorElement: <ErrorPage/>
    }
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
