import App from "./components/App";
import Home from "./components/HomePage";
import ErrorPage from "./components/ErrorPage";
import Coffee from "./components/Coffee";
import CoffeeForm from "./components/NewCoffeeForm";
import CoffeeList from "./components/CoffeeList";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/coffee/:id",
            element: <Coffee />,
          },
        ],
      },
      {
        path: "/coffee",
        element: <CoffeeList />,
      },
      {
        path: "/form",
        element: <CoffeeForm />,
      },
    ],
  },
];

export default routes;
