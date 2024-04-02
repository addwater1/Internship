import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./views/Root";
import DocumentList from "./views/DocumentList";
import YearList from "./views/YearList";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/document",
          element: <DocumentList />
        },
        {
          path: "/year",
          element: <YearList />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}