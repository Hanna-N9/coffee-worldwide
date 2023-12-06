import App from "./components/App";
import Home from "./components/HomePage";
import ErrorPage from "./components/ErrorPage";
import CoffeeForm from "./components/NewCoffeeForm";
import CoffeeList from "./components/CoffeeList";
import SingleCoffeeDetails from "./components/SingleCoffeeDetails";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/coffee",
        element: <CoffeeList />,
      },
      {
        path: "/form",
        element: <CoffeeForm />,
      },
      {
        path: "/coffee/:id",
        element: <SingleCoffeeDetails />,
      },
    ],
  },
];

export default routes;
